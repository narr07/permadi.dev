<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const { locale } = useI18n()

const { data: listBlog } = await useAsyncData(`articles-${locale.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['blog_id'][] | Collections['blog_en'][]
}, {
  watch: [locale],
})

if (!listBlog.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <UContainer>
    <NuxtLink v-for="blog in listBlog" :key="blog.path" :to="localePath(`/article${blog.path}`)">
      <UCard>
        <pre>{{ blog }}</pre>
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
      </UCard>
    </NuxtLink>
  </UContainer>
</template>
