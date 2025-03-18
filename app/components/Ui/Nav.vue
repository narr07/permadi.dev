<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const { locale } = useI18n()

// Koleksi dinamis berdasarkan bahasa
const collection = computed(() => `pages_${locale.value}` as keyof Collections)

// Query navigasi dengan watch
const { data: navigations } = await useAsyncData(
  `navigation-${locale.value}`,
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
  return (
    route.path === localizedPath
    || (localizedPath !== '/'
      && localizedPath !== '/en'
      && route.path.startsWith(`${localizedPath}/`))
  )
}
</script>

<template>
  <div class="fixed top-2 z-50 w-full">
    <UContainer>
      <nav
        class="bg-permadi-50 dark:bg-permadi-800 dark:ring-permadi-700 mx-auto max-w-6xl rounded p-2 ring-2"
      >
        <div class="flex items-center justify-between">
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
                    class="ring-permadi-900  rounded ring-2"

                    :icon="item.icon as string"
                    :to="localePath(item.path)"
                    :class="
                      isActive(item.path)
                        ? 'text-permadi-900 bg-yellow-500'
                        : 'bg-permadi-100 text-permadi-700'
                    "
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
    </UContainer>
  </div>
</template>
