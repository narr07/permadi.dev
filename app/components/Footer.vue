<script setup lang="ts">
const { socials } = useAppConfig()

const socialIcon = [
  { name: 'Twitter', url: socials.twitter, icon: 'fa6-brands:square-x-twitter' },
  { name: 'Github', url: socials.github, icon: 'fa6-brands:square-github' },
  { name: 'Linkedin', url: socials.linkedin, icon: 'fa6-brands:linkedin' },
  { name: 'Facebook', url: socials.facebook, icon: 'fa6-brands:square-facebook' },
  { name: 'Instagram', url: socials.instagram, icon: 'fa6-brands:instagram' },
  { name: 'Behance', url: socials.behance, icon: 'fa6-brands:square-behance' },
  { name: 'Whatsapp', url: socials.whatsapp, icon: 'fa6-brands:whatsapp' },
]
const userVisitor = defineAsyncComponent(() => import('../components/userVisitor.vue'))
// const pageView = defineAsyncComponent(() => import('../components/pageView.vue'))
</script>

<template>
  <UContainer class=" sm:px-4 lg:px-6 px-2">
    <UCard class="mt-2 bg-yellow-500 ring-2 dark:ring-permadi-600 ring-permadi-900 dark:bg-permadi-700  rounded">
      <div class="flex items-center justify-between flex-col md:flex-row">
        <div class="flex flex-col mb-2 md:mb-0  md:flex-row  items-center gap-2">
          <userVisitor />
          <!-- <pageView /> -->
        </div>
        <div class="flex flex-row gap-2">
          <div v-for="(icon, index) in socialIcon" :key="index">
            <UButton
              :href="icon.url"
              :aria-label="icon.name"
              target="_blank"
              class="hover:scale-105 duration-100 ease-out"

              square
              color="neutral"
            >
              <UIcon :name="icon.icon" class="size-5 text-permadi-200 dark:text-permadi-900" />
              <span class="sr-only">{{ icon.name }}</span>
            </UButton>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4 md:mb-0 justify-center text-center">
        <div class="ml-2">
          <p>
            © 2024, narr07 - All rights reserved.
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
