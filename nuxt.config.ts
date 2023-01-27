export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1.0',
      title: 'Project',
      meta: [{ name: 'description', content: 'Project' }],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [['@storyblok/nuxt', { accessToken: process.env.NUXT_STORYBLOK_APIKEY }], '@nuxt/image-edge', 'nuxt-icon'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
