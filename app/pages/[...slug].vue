<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const collection = computed(() => `pages_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  `page-${locale.value}-${slug.value}`,
  async () => {
    const content = await queryCollection(collection.value)
      .path(slug.value)
      .first()

    // Possibly fallback to default locale if content is missing in non-default locale

    return content
  },
  {
    watch: [locale],
  },
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

if (page.value?.seo) {
  useSeoMeta(page.value.seo)
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>
