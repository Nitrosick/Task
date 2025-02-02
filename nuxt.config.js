export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Task',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    { src: '~assets/style/normalize.scss', lang: 'scss' },
    { src: '~assets/style/variables.scss', lang: 'scss' },
    { src: '~assets/style/main.scss', lang: 'scss' }
  ],

  components: [
    { path: '~/components/ui', extensions: ['vue'] },
    { path: '~/components/app', extensions: ['vue'] }
  ],

  plugins: [],
  buildModules: [],
  modules: [],
  build: {}
}
