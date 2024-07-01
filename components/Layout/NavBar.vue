<script setup lang="ts">
const localePath = useLocalePath()
const { navigation } = useNavigation()
const route = useRoute()
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header class="sticky inset-x-0 top-2 z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start">
    <nav class="bg-primary-100 ring-primary-800 relative mx-2 w-full max-w-6xl rounded-md p-2 ring-2 md:flex md:items-center md:justify-between lg:mx-auto dark:bg-brand-900" aria-label="Global">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink class="inline-block" :to="localePath('/')" aria-label="Permadi">
          <Logo />
        </NuxtLink>
        <!-- End Logo -->

        <div class="md:hidden">
          <div class="flex items-center gap-2">
            <div v-for="link in navigation" :key="link.to">
              <UTooltip :text="link.name">
                <UButton
                  role="link"
                  rel="noreferrer"
                  :aria-label="link.name || 'Link Halaman'"
                  :title="link.name || 'Link Halaman'"
                  square
                  :icon="link.icon"
                  :aria-current="link.to === localePath(route.path) ? 'page' : undefined"
                  :to="localePath(link.to)"
                  :variant="localePath(link.to) === localePath(route.path) ? 'solid' : 'ghost'"
                  color="gray"
                >
                  <span class="sr-only">{{ link.name }}</span>
                </UButton>
              </UTooltip>
            </div>
            <ColorMode />
            <LangMode />
          </div>
        </div>
      </div>

      <!-- Collapse -->
      <div class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block">
        <div class="flex flex-col py-2 md:flex-row md:items-center md:justify-end md:py-0 md:ps-7">
          <div class="flex items-center gap-2">
            <div v-for="link in navigation" :key="link.to">
              <UTooltip :text="link.name">
                <NuxtLink :to="localePath(link.to)">
                  <UButton
                    :label="link.name"
                    :trailing="false"
                    :icon="link.icon"
                    size="sm"
                    color="gray"
                    :variant="localePath(link.to) === localePath(route.path) ? 'solid' : 'ghost'"
                  />
                </NuxtLink>
              </UTooltip>
            </div>
            <ColorMode />
            <LangMode />
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>
