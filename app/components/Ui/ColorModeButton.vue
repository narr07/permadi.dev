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
        :icon="isDark ? 'hugeicons:moon' : 'hugeicons:sun-02'"
        :aria-label="isDark ? 'Aktifkan Tema Terang' : 'Aktifkan Tema Gelap'"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="size-8" />
      </template>
    </ClientOnly>
  </div>
</template>
