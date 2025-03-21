<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData(`page-blog${slug.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection).path(slug.value).first()

  // Possibly fallback to default locale if content is missing in non-default locale

  return content
}, {
  watch: [locale],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const setI18nParams = useSetI18nParams()
setI18nParams({
  id: { slug: page.slugs }, // slug: 'rode-mok'
  en: { slug: page.slugs }, // slug: 'red-mug'
})

const switchLocalePath = useSwitchLocalePath()
switchLocalePath('id') // /products/red-mug
switchLocalePath('en') // /nl/products/rode-mok
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>
