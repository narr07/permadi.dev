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
    class="fixed z-50   bottom-3  md:hidden  left-2 button"
    @click="scrollToTop()"
  >
    <span class="sr-only">To Top</span>
  </UButton>
</template>

<style></style>
