<script setup lang="ts">
import { useRoute } from "vue-router";

const localePath = useLocalePath();
const route = useRoute();
const open = ref(false);
function isActive(path: string): boolean {
  const localizedPath = localePath(path);
  return (
    route.path === localizedPath ||
    (localizedPath !== "/" &&
      localizedPath !== "/en" &&
      route.path.startsWith(`${localizedPath}/`))
  );
}

const menuItems = [
  { name: "Home", path: "/", icon: "hugeicons:home-03" },
  { name: "Blog", path: "/blog", icon: "hugeicons:book-04" },
  { name: "Project", path: "/project", icon: "hugeicons:folder-check" },
];
</script>

<template>
  <nav class="fixed top-1 z-50 w-full">
    <UContainer class="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
      <div
        class="dark:ring-permadi-600 ring-permadi-900 dark:bg-permadi-700 rounded bg-yellow-500 p-2 ring-2"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <ULink aria-label="logo" :to="localePath('/')">
                <Logo />
              </ULink>
            </div>
          </div>
          <div class="flex md:space-x-2">
            <div class="flex items-center space-x-1">
              <div v-for="item in menuItems" :key="item.path">
                <div>
                  <UButton
                    color="neutral"
                    variant="outline"
                    square
                    :aria-label="item.name"
                    :to="localePath(item.path)"
                    class="ring-permadi-950 flex items-center rounded px-2 text-base font-semibold hover:ring-2"
                    :class="{
                      'text-permadi-900 ring-permadi-950 bg-permadi-200 hover:bg-permadi-300 rounded px-2 ring-2 dark:bg-yellow-500 dark:hover:bg-yellow-700':
                        isActive(item.path),
                    }"
                  >
                    <UIcon :name="item.icon" class="size-5" />
                    <div class="sr-only md:not-sr-only md:ml-2">
                      {{ item.name }}
                    </div>
                  </UButton>
                </div>
              </div>
            </div>

            <div class="ml-4 md:hidden">
              <div class="flex items-center space-x-2">
                <ColorModeButton />
                <UPopover v-model:open="open">
                  <UButton
                    :icon="
                      open
                        ? 'hugeicons:dashboard-square-03'
                        : 'hugeicons:dashboard-square-01'
                    "
                    color="neutral"
                    variant="outline"
                    square
                    aria-label="Menu"
                    size="lg"
                    class="ring-permadi-950 flex items-center rounded px-2 text-base font-semibold hover:ring-2"
                  />

                  <template #content>
                    <UCard>
                      <div class="flex flex-col items-start space-y-2">
                        <DocsSearchButton />
                        <LangToogle />
                      </div>
                    </UCard>
                  </template>
                </UPopover>
              </div>
            </div>

            <div class="hidden md:block">
              <div class="ml-4 flex items-center space-x-2">
                <DocsSearchButton />
                <LangToogle />
                <ColorModeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </nav>
</template>
