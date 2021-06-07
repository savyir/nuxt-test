import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
import _ from 'lodash'

let vsdPath = process.env.PORT == 9200 ? 'vuetify-strapi-dashboard' : 'modules/vsd/src/index';
let vspPath = process.env.PORT == 9200 ? 'vuetify-strapi-page' : 'modules/vsp/src/index';
let hasNoIndex = process.env.PORT == 9200;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: process.env.TITLE_TEMPLATE || '%s - Vuetify and Strapi tools for developers and start-ups',
    title: 'Home',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      hasNoIndex ? {name: 'robots', content: 'noindex'} : {},
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

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    // language: String, // Recaptcha language (v2)
    siteKey: process.env.RECAPTCHA_SITE_KEY || '6Lc8oeoaAAAAAMvHCdDN6Ylxh5rGhNpuevBrIlR-',// Site key for requests
    version: 3, // Version
    // size: 'compact' // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vuetify'
    '~/plugins/jsonld'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
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
    [vspPath, {
      baseUrl: process.env.BASE_URL,
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
      reservation: {
        title: 'Vuetify and Strapi Tools',
        menu: [
          {
            text: 'Home',
            icon: 'home',
            link: '/',
          }, {
            text: 'Tools',
            icon: 'shopping_basket',
            link: '/tools',
          }, {
            text: 'Blog',
            icon: 'description',
            link: '/blog',
          }, {
            text: 'Contact',
            icon: 'phone',
            link: '/pages/contact',
          }
        ],
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
        logo: '/logo-v.png',
        title: null,
        subtitle: 'build better businesses',
        menu: [
          {
            text: 'Home',
            link: '/',
          }, {
            text: 'Blog',
            link: '/blog',
          }
        ],
      }
    }],
    [vsdPath, {
      baseUrl: process.env.BASE_URL,
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
      },
      user: {
        _scheme: 'local',
        endpoints: {
          login: {url: _.get(process, 'env.LOGIN_URL', '/auth/local'), method: 'post', propertyName: 'jwt'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/users/me', method: 'get'}
        },
        tokenRequired: true,
        tokenType: 'bearer',
        autoFetchUser: true,
      },
    },
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/login',
      home: '/'
    }
  },
}
