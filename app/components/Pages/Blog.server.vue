<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: listBlog } = await useAsyncData(`articles-${locale.value}`, () => {
  return queryCollection(`blog_${locale.value}`)
    .select('title', 'description', 'date', 'path', 'tags')
    .order('date', 'DESC')
    .all()
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
