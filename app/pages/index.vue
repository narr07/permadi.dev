<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection('pages').path('/').first(),
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})
</script>

<template>
  <div>
    <UCard class="my-4 bg-red-50 text-5xl text-red-500">
      ini adalah hoome
    </UCard>
  </div>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>
    Home not found
  </div>
</template>
