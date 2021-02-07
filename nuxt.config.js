import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
import _ from 'lodash'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-test',
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vsd'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['modules/vsd/src/index', {
      // rtl: true,
      apiHelper: require('./modules/crypto/api').default,
      validations: require('./modules/crypto/validations').default,
      config: require('./modules/crypto/config').default,
      settings: require('./modules/crypto/settings').default,
      menu: require('./modules/crypto/menu').default
    }]
  ],
  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr'},
      {code: 'fa', iso: 'fa-IR', file: 'fa.js', dir: 'rtl'}
    ],
    defaultLocale: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    changeOrigin: true,
    baseURL: 'http://api-vsd.savy.ir',
    debug: false
  },
  auth: {
    strategies: {
      admin: {
        _scheme: 'local',
        endpoints: {
          login: {url: _.get(process, 'env.LOGIN_URL', '/auth/local'), method: 'post', propertyName: 'jwt'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/users/me', method: 'get'}
        },
        tokenRequired: true,
        tokenType: 'bearer',
        autoFetchUser: true
      }
    },
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/login',
      home: '/'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      themes: {}
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
