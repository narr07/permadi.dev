<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { UContainer } from '#components'

const { locale, localeProperties } = useI18n()

const collection = computed(() => `pages_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  `Artikel-${locale.value}`,
  async () => {
    const content = await queryCollection(collection.value)
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
  <UContainer>
    <div class="pb-4 pt-8">
      <h1 class="text-g3 md:text-g4 font-bold">
        {{ page?.title }}
      </h1>
    </div>
    <ContentRenderer
      v-if="page"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
    />
  </UContainer>
</template>
<!--
<template>
  <UContainer>
    <UCard>
      Ini Home
    </UCard>
  </UContainer>
</template> -->
