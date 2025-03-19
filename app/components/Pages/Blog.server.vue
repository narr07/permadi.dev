<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const { locale } = useI18n()

const { data: listBlog } = await useAsyncData(`articles-${locale.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  return await queryCollection(collection)
    .select('title', 'path', 'description', 'date', 'tags')
    .order('date', 'DESC')
    .all() as Collections['blog_id'][] | Collections['blog_en'][]
}, {
  watch: [locale],
})

if (!listBlog.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

useSeoMeta({
  title: listBlog.value.title,
  description: listBlog.value.description,
})
</script>

<template>
  <UContainer>
    <NuxtLink v-for="blog in listBlog" :key="blog.path" :to="localePath(`/article${blog.path}`)">
      <pre>{{ blog }}</pre>
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.description }}</p>
    </NuxtLink>
  </UContainer>
</template>
