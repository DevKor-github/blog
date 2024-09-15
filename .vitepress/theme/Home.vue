<script setup lang="ts">
import Date from './Date.vue'
import { data as posts } from './posts.data.mjs'
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <div class="w-fit pt-6 pb-8 space-y-2 md:space-y-5">
      <img src="/logo.png" class="relative max-w-2xl w-full" />
      <p class="text-2xl leading-6 font-semibold text-gray-800 dark:text-white relative px-2">
        {{ site.description }}
      </p>
    </div>
    <ul class="divide-y divide-gray-200 dark:divide-slate-200/5 relative">
      <li class="py-4" v-for="{ title, url, date, excerpt } of posts">
        <article
          class="bg-white p-6 border-rounded-4 space-y-2 shadow-card xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
        >
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-gray-900 dark:text-white" :href="url">
                  {{title}}
                </a>
              </h2>
              <div
                v-if="excerpt"
                class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <a class="link" aria-label="read more" :href="url">읽어보기 →</a>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>