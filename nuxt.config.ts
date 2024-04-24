// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@pinia/nuxt",
    "vue3-pixi-nuxt"
  ],
  // imports: {
  //   presets: [
  //     {
  //       from: 'vue3-pixi',
  //       imports: ["Application"]
  //     }
  //   ]
  // },
  pinia: {
    storesDirs: ["./store/**"]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/vars.scss" as *;',
        },
      },
    },
  },
  css: ["@/assets/style/style.scss"],
})
