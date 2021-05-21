import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
import _ from 'lodash'

let vsdPath = process.env.PORT == 9200 ? 'vuetify-strapi-dashboard' : 'modules/vsd/src/index';
let vspPath = process.env.PORT == 9200 ? 'vuetify-strapi-page' : 'modules/vsp/src/index';

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
  css: [
    '~/static/assets/font.css'
  ],

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
    ['nuxt-i18n',
      {
        vueI18nLoader: true,
        locales: [
          {code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr'},
          {code: 'fa', iso: 'fa-IR', file: 'fa.js', dir: 'rtl'}
        ],
        rtl: false,
        lazy: true,
        langDir: "locale/",
        defaultLocale: 'en'
      }
    ],
    '@nuxt/content',
    [vspPath, {
      i18n: true,
      shop: {
        cart: '/shop/cart',
        categories: '/shop/category',
        products: '/shop/products',
        cartUrl: '/carts',
        categoriesUrl: '/categories',
        productsUrl: 'http://localhost:1337/products',
        invoicesUrl: '/invoices',
      },
      blog: {
        home: '/blog',
        contents: '/blog',
        tags: '/blog/tags',
        logo: '/v.png',
        title: 'Blog Title',
        menu: [
          {
            text: 'Savy',
            link: '/blog/author/savy',
          }
        ],
      }
    }],
    [vsdPath, {
      socket: false,
      rtl: true,
      i18n: true,
      // locale: 'fa-ir',
      crm: {
        logo: '/crm/basic-panel.png',
        home: '/crm',
        support: '/crm/ticket/new',
        menu: require('./modules/crm/menu').default
      },
      builder: {
        form: '/forms',
        group: '/groups',
        element: '/elements',
        record: '/records',
      },
      apiListHelper: require('./modules/crypto/api').default,
      apiShowHelper: require('./modules/crypto/apiShowPage').default,
      apiFormHelper: require('./modules/crypto/apiFormPage').default,
      validations: require('./modules/crypto/validations').default,
      config: require('./modules/crypto/config').default,
      settings: require('./modules/crypto/settings').default,
      menu: require('./modules/crypto/menu').default
    }]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    changeOrigin: true,
    baseURL: process.env.API_URL,
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
      home: '/admin'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: false,
    theme: {
      themes: {
        light: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      },
    },
  },
}
