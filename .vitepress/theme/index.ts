// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import BlogLayout from './Layout.vue'

import '@unocss/reset/eric-meyer.css'
import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:uno.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: BlogLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(TwoslashFloatingVue)
  }
} satisfies Theme
