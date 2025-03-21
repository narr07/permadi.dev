<script lang="ts" setup>
function scrollToTop() {
  if (window) {
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <UButton
    icon="ph:caret-double-up-duotone"
    square
    rel="noopener noreferrer"
    class="button fixed bottom-3 left-2 z-50 md:hidden"
    @click="scrollToTop()"
  >
    <span class="sr-only">To Top</span>
  </UButton>
</template>
ç
