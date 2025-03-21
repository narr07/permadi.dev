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
    to: '/artikel',
    icon: 'narr:article',
  },
  {
    name: t('navigation.project'),
    to: '/proyek',
    icon: 'narr:project',
  },
  {
    name: t('navigation.gallery'),
    to: '/galeri',
    icon: 'narr:gallery',
  },
])
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

function isActive(path: string): boolean {
  // Handle home page
  if (path === '/') {
    return route.path === '/' || route.path === '/en'
  }

  const localizedPath = localePath(path)

  // Check if route matches the localized path exactly
  if (route.path === localizedPath) {
    return true
  }

  // Check if route is a subpage of the localized path
  if (localizedPath !== '/'
    && localizedPath !== '/en'
    && route.path.startsWith(`${localizedPath}/`)) {
    return true
  }

  // Handle translated slugs for English locale
  if (locale.value === 'en' && path !== '/') {
    // Map default language paths to English equivalents
    const pathMap: { [key: string]: string } = {
      '/artikel': '/en/article',
      '/proyek': '/en/project',
      '/galeri': '/en/gallery',
    }

    // Check if current route starts with the English equivalent path
    const mappedPath = pathMap[path as keyof typeof pathMap]
    if (mappedPath && route.path.startsWith(mappedPath)) {
      return true
    }
  }

  return false
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
            <UTooltip :text="t('navigation.home')">
              <NuxtLink to="/">
                <UiLogo />
              </NuxtLink>
            </UTooltip>
          </div>
          <div class="flex items-center space-x-2">
            <div>
              <div class="flex items-center space-x-3">
                <div v-for="item in navigation" :key="item.name">
                  <UTooltip :text="item.name">
                    <UButton
                      :id="item.name.toLowerCase()"
                      class="ring-permadi-900 rounded ring-2"
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
                  </UTooltip>
                </div>
              </div>
            </div>
            <div class="ml-2 flex items-center space-x-2">
              <LangToogle />
              <UiColorModeButton />
            </div>
          </div>
        </div>
      </nav>
    </UContainer>
  </div>
</template>
