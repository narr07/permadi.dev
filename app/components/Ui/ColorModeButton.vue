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
        :icon="isDark ? 'narr:moon' : 'narr:sun'"
        :aria-label="isDark ? 'Aktifkan Tema Terang' : 'Aktifkan Tema Gelap'"
        class="bg-white ring-2 ring-permadi-950  dark:bg-permadi-700 dark:ring-permadi-600"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="size-8" />
      </template>
    </ClientOnly>
  </div>
</template>
