<script setup lang="ts">
const { t } = useI18n()

// Menggunakan computed untuk membuat navigasi reaktif terhadap perubahan bahasa
const navigation = computed(() => [
  {
    name: t('navigation.home'),
    to: '/',
    icon: 'narr:home',
  },
  {
    name: t('navigation.article'),
    to: '/article',
    icon: 'narr:article',
  },
  {
    name: t('navigation.project'),
    to: '/project',
    icon: 'narr:project',
  },
  {
    name: t('navigation.gallery'),
    to: '/gallery',
    icon: 'narr:gallery',
  },

])
const route = useRoute()
const localePath = useLocalePath()

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
        class="bg-permadi-50 dark:bg-permadi-900 dark:ring-permadi-800 mx-auto max-w-6xl rounded p-2 ring-2"
      >
        <div class="flex items-center justify-between">
          <div>
            <NuxtLink to="/">
              <UiLogo />
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-2">
            <div>
              <div
                class="flex items-center space-x-3"
              >
                <div v-for="item in navigation" :key="item.name">
                  <UButton
                    :id="item.name.toLowerCase()"
                    class="ring-permadi-900  rounded ring-2"
                    square
                    :aria-label="`${item.name} navigation link`"
                    :icon="item.icon as string"
                    :to="localePath(item.to)"
                    :class="
                      isActive(item.to)
                        ? 'text-permadi-900 bg-yellow-500'
                        : 'bg-permadi-100 text-permadi-700 dark:bg-permadi-800 dark:text-permadi-50 ring-permadi-700'
                    "
                  >
                    <span class="sr-only md:not-sr-only">
                      {{ item.name }}
                    </span>
                  </UButton>
                </div>
              </div>
            </div>
            <div class="flex items-center ml-2 space-x-2">
              <LangToogle />
              <UiColorModeButton />
            </div>
          </div>
        </div>
      </nav>
    </UContainer>
  </div>
</template>
