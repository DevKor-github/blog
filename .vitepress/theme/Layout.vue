<script setup lang="ts">
import Home from './Home.vue'
import { useData } from 'vitepress'
import Article from './Article.vue'
// import NotFound from './NotFound.vue'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="antialiased overflow-x-hidden min-h-100vh">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="max-w-2xl relative">
        <div class="animate-[intro_1s_ease-in-out] shadow-card absolute w-[220%] bg-white aspect-ratio-square translate-y-[-50%] top-[-50%] left-[-60%] bg-white border-rounded-full"/>
      </div>
      <nav class="flex justify-between items-center py-10 font-bold relative">
        <a class="text-xl flex items-center" href="/" aria-label="The Vue Point">
          <img
            class="inline-block mr-2"
            style="width: 36px; height: 31px"
            alt="logo"
            src="/logo.svg"
          />
          <span
            v-if="!frontmatter.index"
            class="font-logo font-extrabold text-2xl hidden md:inline dark:text-white"
            >{{site.title.toUpperCase()}}</span
          >
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/devkor-github/blog"
            target="_blank"
            rel="noopener"
            ><span class="hidden sm:inline">GitHub </span>Source</a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200 vp-raw"
            href="/feed.rss"
            >DevKor GitHub</a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://devkor.club"
            target="_blank"
            rel="noopener"
            >DevKor →</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-5xl mx-auto md:px-4 sm:px-6 xl:px-0">
      <Home v-if="frontmatter.index" />
      <Article v-else />
    </main>
  </div>
</template>