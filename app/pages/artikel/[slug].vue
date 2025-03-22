<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: pageBlsogSlug } = await useAsyncData(route.path, () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  const content = queryCollection(collection)
    .path(slug.value)
    .first()

  return content
}, {
  watch: [locale],
})

if (!pageBlsogSlug.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <UContainer>
    <ContentRenderer
      v-if="pageBlsogSlug"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="pageBlsogSlug"
    />
  </UContainer>
</template>
