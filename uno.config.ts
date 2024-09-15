import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        logo: "Montserrat:800"
      }
    })
  ],
  rules: [
    [
      "shadow-card", {
        "box-shadow": "20px 20px 80px 0px rgba(0, 0, 0, 0.05)",
      },
    ],
  ],
  theme: {
    colors: {
      brand: '#F4B820'
    },
    animation: {
      keyframes: {
        intro: `{
          0% {
            transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(0) scaleY(0) scaleZ(0)
          }
          100% {
            transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(1) scaleY(1) scaleZ(1)
          }
        }`
      }
    }
  }
})