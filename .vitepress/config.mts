import UnoCSS from 'unocss/vite'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevKor Techblog",
  description: "고려대학교 소프트웨어 개발학회 DevKor 기술블로그",
  
  // disable dark mode
  appearance: false,
  cleanUrls: true,
  lang: "ko-KR",
  head: [
    ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"}],
  ],
  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ]
  },

  vite: {
    plugins: [UnoCSS()],
  }
})
