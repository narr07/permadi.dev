<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

// First, check if current article exists
const { data: pageContent } = await useAsyncData(`content-${route.params.slug}-${locale.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  return queryCollection(collection)
    .where('slugs', '=', route.params.slug)
    .first()
}, {
  watch: [locale],
})

// If not found - try to find by articleId from opposite language
const { data: alternateContent } = await useAsyncData(`alternate-${route.params.slug}-${locale.value}`, async () => {
  if (pageContent.value)
    return null // If original content exists, no need for this

  // Try to find article in opposite language
  const oppositeLocale = locale.value === 'en' ? 'id' : 'en'
  const oppositeCollection = (`blog_${oppositeLocale}`) as keyof Collections

  // Find the article in the opposite language
  const oppositeArticle = await queryCollection(oppositeCollection)
    .where('slugs', '=', route.params.slug)
    .first()

  // If found, try to find matching article in current language by articleId
  if (oppositeArticle?.articleId) {
    return queryCollection(`blog_${locale.value}`)
      .where('articleId', '=', oppositeArticle.articleId)
      .first()
  }

  return null
}, {
  watch: [pageContent, locale],
})

// Either use the original content or the alternate one found by articleId
const content = computed(() => pageContent.value || alternateContent.value)

// Throw 404 only if we have no content at all
if (!content.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

// Always set params for both languages using the same slug
// This ensures the language toggle button works consistently
const setI18nParams = useSetI18nParams()
setI18nParams({
  en: { slug: route.params.slug },
  id: { slug: route.params.slug },
})

// Set SEO metadata
useSeoMeta({
  title: content.value.title,
  description: content.value.description || '',
})
</script>

<template>
  <UContainer>
    <ContentRenderer
      v-if="content"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="content"
    />
  </UContainer>
</template>
