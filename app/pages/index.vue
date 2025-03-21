// app/pages/index.vue
<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const collection = computed(() => `pages_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  `page-${slug.value}`,
  async () => {
    const content = await queryCollection(collection.value).path('/home').first()
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

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>
<!--
<template>
  <UContainer>
    <UCard>
      Ini Home
    </UCard>
  </UContainer>
</template> -->
