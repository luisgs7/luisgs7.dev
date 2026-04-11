<template>
  <section class="bg-surface-container-low py-16 sm:py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6"
      >
        <div class="w-full">
          <h2
            class="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3 sm:mb-4 tracking-tight"
          >
            {{ blogIntro.title }}
          </h2>
          <p class="text-on-surface-variant max-w-xl text-base sm:text-lg">
            {{ blogIntro.subtitle }}
          </p>
        </div>
        <NuxtLink
          to="/blog"
          class="text-primary font-bold inline-flex items-center gap-2 group text-base sm:text-lg py-2 -ml-1 md:ml-0 min-h-11"
        >
          {{ blogIntro.archiveLink }}
          <ArrowBigRight
            class="size-5 sm:size-6 shrink-0 transition-transform group-hover:translate-x-2"
            aria-hidden="true"
            stroke-width="2"
          />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-10">
        <NuxtLink
          v-for="post in latestBlogPosts ?? []"
          :key="post.path"
          :to="post.path"
          :class="[
            'block bg-surface-container-high rounded-3xl sm:rounded-[2rem] overflow-hidden border border-outline-variant/10 group sm:hover:-translate-y-3 transition-all duration-500 sm:hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            post.shadow === 'tertiary'
              ? 'sm:hover:shadow-tertiary/5'
              : 'sm:hover:shadow-primary/5',
          ]"
        >
          <div class="aspect-video bg-surface-container-highest relative overflow-hidden">
            <NuxtPicture
              :src="post.image"
              :alt="post.imageAlt"
              width="800"
              height="450"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              loading="lazy"
              :img-attrs="{
                class:
                  'w-full h-full object-cover opacity-80 sm:group-hover:scale-110 transition-transform duration-700',
              }"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"
            />
          </div>
          <div class="p-5 sm:p-8 relative -mt-8 sm:-mt-10">
            <span
              class="px-3 sm:px-4 py-1 rounded-full font-label text-[9px] sm:text-[10px] uppercase tracking-widest mb-3 sm:mb-4 inline-block font-bold"
              :class="post.tagClass"
            >
              {{ post.tag }}
            </span>
            <h3
              class="font-headline text-xl sm:text-2xl font-bold mb-3 sm:mb-4 sm:group-hover:text-primary transition-colors leading-tight"
            >
              {{ post.title }}
            </h3>
            <p class="text-on-surface-variant text-sm sm:text-base line-clamp-2 mb-6 sm:mb-8 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <span
              class="inline-flex items-center min-h-11 text-sm font-bold gap-2 text-primary sm:group-hover:gap-3 transition-all py-1 -mx-1 px-1 rounded-lg"
            >
              {{ blogIntro.readCaseStudy }}
              <ChevronRight class="size-[1.125rem] shrink-0" aria-hidden="true" stroke-width="2.25" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowBigRight, ChevronRight } from 'lucide-vue-next'

import type { HomeCopy } from '~/composables/useHomeCopy'

defineProps<{
  blogIntro: HomeCopy['blogIntro']
}>()

const { data: latestBlogPosts } = await useLatestBlogPostsForHome()
</script>
