const title = 'Test Task'
// const backend = 'http://nitros66.beget.tech/test/'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-12-27',
  devtools: { enabled: true },
  // runtimeConfig: {
  //   public: {
  //     backendUrl: backend
  //   }
  // },
  app: {
    head: {
      charset: 'utf-8',
      title: title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: {
    dirs: [
      'components/ui',
      'components/app'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/normalize.scss',
    '@/assets/style/main.scss'
  ],
  imports: {
    dirs: ['store']
  }
})
