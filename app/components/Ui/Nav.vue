<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const { locale } = useI18n()

// Koleksi dinamis berdasarkan bahasa
const collection = computed(() => `pages_${locale.value}` as keyof Collections)

// Query navigasi dengan watch
const { data: navigations } = await useAsyncData(
  'navigation',
  () => {
    return queryCollectionNavigation(collection.value, ['icon'])
  },
  {
    watch: [locale], // Re-run query jika locale berubah
  },
)

// Error handling jika navigasi tidak ditemukan
if (!navigations.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Navigation not found',
    fatal: true,
  })
}

// const dropdownItems = computed(() => {
//   if (!navigations)
//     return []
//   return navigations.value?.map(item => ({
//     label: item.title,
//     icon: item.icon as string | undefined,
//     to: item.path,
//   }))
// })

const route = useRoute()

function isActive(path: string): boolean {
  const localizedPath = localePath(path)
  return route.path === localizedPath || (localizedPath !== '/' && localizedPath !== '/en' && route.path.startsWith(`${localizedPath}/`))
}
</script>

<template>
  <div class="fixed top-2  w-full z-50  ">
    <nav class="max-w-6xl mx-auto  ">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/">
            <UiLogo />
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <div>
            <div v-if="navigations" class="flex items-center space-x-3">
              <div v-for="item in navigations" :key="item.path">
                <UButton
                  class="ring-2 ring-permadi-900 rounded  "
                  :icon="item.icon as string" :to="localePath(item.path)" :class="isActive(item.path) ? 'bg-yellow-500 text-permadi-900' : 'bg-permadi-300 text-permadi-700'"
                >
                  {{ item.title }}
                </UButton>
              </div>
            </div>
          </div>
          <LangToogle />
          <UiColorModeButton />
        </div>
      </div>
    </nav>
  </div>
</template>
