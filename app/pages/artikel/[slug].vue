<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()

const { locale, localeProperties, t } = useI18n()

// Track the current and previous locale to handle transitions
const currentLocale = ref(locale.value)
const isChangingLocale = ref(false)

// Function to fetch article content
async function fetchArticle(slug: string, lang: string) {
  const collection = (`blog_${lang}`) as keyof Collections

  // Try to find by direct path match first
  let content = await queryCollection(collection)
    .where('id_slug', '=', slug)
    .first()

  // If not found, try by slug field match for English
  if (!content && lang === 'en') {
    content = await queryCollection(collection)
      .where('en_slug', '=', slug)
      .first()
  }

  return content
}

// First try to find article in current locale directly
const { data: page, error, refresh } = await useAsyncData(
  `page-blog-${route.params.slug}-${currentLocale.value}`,
  () => fetchArticle(route.params.slug as string, currentLocale.value),
)

// Handle locale changes with proper navigation
watch(locale, async (newLocale) => {
  isChangingLocale.value = true

  try {
    // Get the appropriate slug for the new locale
    const targetSlug = newLocale === 'en'
      ? (page.value as any)?.en_slug
      : (page.value as any)?.id_slug

    if (targetSlug) {
      // Navigate to the correct URL for the new locale
      await navigateTo(`/${newLocale === 'en' ? 'articles' : 'artikel'}/${targetSlug}`)
    }
    else {
      // If no matching slug, refresh the data and hope for the best
      currentLocale.value = newLocale
      await refresh()
    }
  }
  catch (e) {
    console.error('Error during language switch:', e)
  }
  finally {
    isChangingLocale.value = false
  }
}, { immediate: false })

// Carefully handle 404s
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: t('page_not_found'), fatal: true })
}

if (!page.value && !isChangingLocale.value) {
  throw createError({ statusCode: 404, statusMessage: t('page_not_found'), fatal: true })
}

// Use language-specific slugs for i18n params if we have a valid page
if (page.value) {
  const setI18nParams = useSetI18nParams()
  setI18nParams({
    en: { slug: (page.value as any).en_slug },
    id: { slug: (page.value as any).id_slug },
  })
}
</script>

<template>
  <div>
    <ContentRenderer
      v-if="page && !isChangingLocale"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
    />
    <div v-else-if="isChangingLocale" class="my-8 text-center">
      <p>{{ $t('loading') }}...</p>
    </div>
  </div>
</template>
