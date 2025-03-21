<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const localePath = useLocalePath()
const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: docs } = await useAsyncData(`blog-list-${locale.value}`, () => {
  return queryCollection(`blog_${locale.value}`)
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'slugs')
    .all()
})
</script>

<template>
  <div>
    <NuxtLink v-for="doc in docs" :key="doc.path" :to="localePath(`/artikel/${doc.slugs}`)">
      <UCard>
        <h2>{{ doc.title }}</h2>
        <p>{{ doc.description }}</p>
      </UCard>
    </NuxtLink>
  </div>
</template>
