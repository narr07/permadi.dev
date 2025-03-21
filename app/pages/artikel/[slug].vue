<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, localeProperties } = useI18n()

// First try to find article in current locale directly
const { data: page } = await useAsyncData(`page-blog-${locale.value}-${route.params.slug}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections

  // Try to find by direct path match first
  let content = await queryCollection(collection)
    .where('id_slug', '=', route.params.slug)
    .first()

  // If not found, try by slug field match
  if (!content) {
    if (locale.value === 'en') {
      content = await queryCollection(collection)
        .where('en_slug', '=', route.params.slug)
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
  en: { slug: (page.value as any).en_slug },
  id: { slug: (page.value as any).id_slug },
})
</script>

<template>
  <div>
    <ContentRenderer
      v-if="page"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
    />
  </div>
</template>
