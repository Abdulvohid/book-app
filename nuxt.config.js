import { vueI18n } from './locales/i18n-config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'book-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // 'nuxt-vite','
    '@nuxtjs/i18n',
  ],
  i18n: vueI18n,

  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  // vite: {
  //   build: true,
  // },

  loaders: {
    sass: {
      implementation: require('sass'),
    },
    scss: {
      implementation: require('sass'),
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
