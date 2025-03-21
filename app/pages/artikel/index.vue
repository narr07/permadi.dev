<script setup lang="ts">
const { locale, localeProperties } = useI18n()

const { data: page } = await useAsyncData(
  `Artikel-${locale.value}`,
  async () => {
    const content = await queryCollection(`pages_${locale.value}`)
      .select('title', 'description', 'body')
      .path('/article')
      .first()
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
