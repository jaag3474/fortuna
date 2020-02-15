import colors from 'vuetify/es5/util/colors'


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Bangers&display=swap",
        rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Quicksand",
        rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css",
        rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css",
        rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
        rel: "stylesheet", href: "vue-typed-js/dist/vue-typed-js.css"
      }
    ]
  },
  router: { middleware: 'games' },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/css/main.css',
    '@assets/css/registro.css',
    '@assets/css/login.css',
    '~/assets/style/app.styl',
    '@/assets/css/styles.css'

    //  '@/assets/css/style/app.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/firebase.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'

  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {

    extend(config, ctx) {
    }
  }
}
