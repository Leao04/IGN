/* eslint-disable */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'IGN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IGN é o maior de sites de games de todas as plataformas com reviews notícias previews' },
      { hid: 'keywords', name: 'keywords', content: 'IGN, Jogos, Console, Playstation, Xbox 360, Xbox one, Microsoft, PS4, PS3'},
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
