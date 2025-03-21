<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

// First try to find article in current locale directly
const { data: page } = await useAsyncData(`page-blog-${locale.value}-${route.params.slug}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections

  // Try to find by direct path match first
  let content = await queryCollection(collection)
    .path(slug.value)
    .first()

  // If not found, try by slug field match
  if (!content) {
    if (locale.value === 'en') {
      content = await queryCollection(collection)
        .where('en_slug', '=', route.params.slug)
        .first()
    }
    else {
      content = await queryCollection(collection)
        .where('id_slug', '=', route.params.slug)
        .first()
    }
  }

  // If still not found, try to find the corresponding article in the other locale
  if (!content) {
    const otherLocale = locale.value === 'en' ? 'id' : 'en'
    const otherCollection = `blog_${otherLocale}` as keyof Collections
    const slugField = locale.value === 'en' ? 'en_slug' : 'id_slug'

    // Find content reference in other locale
    const otherContent = await queryCollection(otherCollection)
      .where(slugField, '=', route.params.slug)
      .first()

    if (otherContent) {
      // Get the slug for the current locale
      const currentLocaleSlugField = locale.value === 'en' ? 'en_slug' : 'id_slug'
      const currentLocaleSlug = (otherContent as Record<string, any>)[currentLocaleSlugField]

      // Try to get the correct content in the current locale
      content = await queryCollection(collection)
        .where(currentLocaleSlugField, '=', currentLocaleSlug)
        .first()
    }
  }

  return content
}, {
  watch: [locale],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Use language-specific slugs for i18n params
const setI18nParams = useSetI18nParams()
setI18nParams({
  en: { slug: page.value.en_slug },
  id: { slug: page.value.id_slug },
})
</script>

<template>
  <div>
    <ul>
      <div>
        fullPath:  {{ route.fullPath }}
      </div>
      <div>
        Path: {{ route.path }}
      </div>
      <div>
        Slug: {{ slug }}
      </div>
      <div v-if="locale === 'id'">
        id_slug: {{ page?.id_slug }}
      </div>
      <div v-if="locale === 'en'">
        en_slug: {{ page?.en_slug }}
      </div>
    </ul>
    <ContentRenderer
      v-if="page"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
    />
  </div>
</template>
