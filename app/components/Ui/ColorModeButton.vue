<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <div>
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
        :icon="isDark ? 'hugeicons:moon' : 'hugeicons:sun-03'"
        :aria-label="isDark ? 'Aktifkan Tema Terang' : 'Aktifkan Tema Gelap'"
        class="bg-permadi-100 ring-permadi-950 text-permadi-900 dark:text-permadi-50 dark:bg-permadi-800 dark:ring-permadi-700 ring-2"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="size-8" />
      </template>
    </ClientOnly>
  </div>
</template>
