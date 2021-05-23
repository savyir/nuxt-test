<template>
  <v-container style="margin-top: -80px;">
    <h1 class="green--text text--darken-4 font-13">Vuetify and Strapi Tools</h1>
    <v-card rounded class="pa-5">
      <vsp-reserve-item-list :items="items" sm="6" md="6" xl="6"/>
    </v-card>
  </v-container>
</template>
<script>
  const items = [
    {
      title: 'Vuetify Strapi Dashboard',
      subTitle: 'build your customized panel/dashboard/crm with this open-source Nuxt module very fast',
      img: '/vsd.png',
      bookmark: false,
      tagImages: [
        "https://badge.fury.io/js/vuetify-Strapi-dashboard.png"
      ],
      rows: [
        {icon: "flag", title: 'dashboard and CRM'},
        {icon: "flag", title: 'simple and 2FA login pages'},
        {icon: "star", title: 'advanced CRUD system'},
        {icon: "star", title: 'filter, sort, search and excel report'},
        {icon: "check", title: 'form generator'},
        {icon: "check", title: 'side menu'},
        {icon: "check", title: 'site settings'},
        {icon: "check", title: 'notification system'},
        {icon: "check", title: 'custom API integration'},
        {icon: "check", title: 'pop-ups, modal and snackbar system'},
        {icon: "money", title: 'user, auth and role system'},
        {icon: "money", title: 'RTL support'},
      ],
      tags: [
        {icon: "money", title: 'Nuxt'},
        {icon: "money", title: 'Strapi'},
        {icon: "flag", title: 'i18n'},
        {icon: "flag", title: 'Strapi'},
        {icon: "flag", title: 'content'},
        {icon: "check", title: 'documentation'},
      ],
      price: 'free (open-source)',
      to: '/vsd'
    },
    {
      title: 'Vuetify Strapi Page',
      subTitle: 'build your site pages with this Nuxt module kit very fast.',
      img: '/vsp.png',
      bookmark: false,
      tagImages: [
        "https://badge.fury.io/js/vuetify-Strapi-page.png"
      ],
      rows: [
        {icon: "flag", title: 'multiple landing pages'},
        {icon: "flag", title: 'different marketing campaign pages'},
        {icon: "star", title: 'login and register pages'},
        {icon: "check", title: 'reservation system'},
        {icon: "check", title: 'podcast blog'},
        {icon: "check", title: 'educational and informative blog'},
        {icon: "check", title: 'invoice pages'},
        {icon: "check", title: 'e-commerce and online-shop pages'},
        {icon: "check", title: 'about-us pages'},
        {icon: "money", title: 'contact-us pages'},
        {icon: "money", title: 'RTL support'},
        {icon: "money", title: 'SEO optimization'},
      ],
      tags: [
        {icon: "money", title: 'Nuxt'},
        {icon: "money", title: 'Strapi'},
        {icon: "flag", title: 'i18n module'},
        {icon: "flag", title: 'content module'},
        {icon: "check", title: 'documentation'},
      ],
      price: 'free (open-source)',
      to: '/vsp'
    },
    {
      title: 'Public Relation Panel',
      subTitle: 'share and track your contents in telegram, twitter, youtube and other social platforms. merge audio and image files and share as video file.',
      img: '/pr-2.png',
      price: 25,
      discount: 5,
      unit: '$',
      stars: 5,
      rows: [
        {icon: "flag", title: 'twitter'},
        {icon: "star", title: 'telegram'},
        {icon: "check", title: 'youtube'},
        {icon: "check", title: 'blog'},
      ],
      tags: [
        {icon: "flag", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
        {icon: "check", title: 'Laravel'},
      ],
      to: 'public-relation-javascript-cms'
    },
    {
      title: 'Advanced Twitter Assistant',
      subTitle: 'automated system for your twitter account. see your followers and unfollowers and mute, block, favorite your friends. build white-list, black-list and favorite-list.',
      img: '/twitter.png',
      price: 15,
      discount: 5,
      unit: '$',
      stars: 5,
      rows: [
        {icon: "flag", title: 'unfollowers'},
        {icon: "star", title: 'automatic favorite your friends'},
        {icon: "check", title: 'white-list and black-list'},
        {icon: "check", title: 'block, mute, unfollow actions'},
      ],
      tags: [
        {icon: "flag", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
        {icon: "check", title: 'Laravel'},
        {icon: "check", title: 'twitter'},
      ],
      to: 'twitter-manage-followers-javascript-cms'
    },
  ];
  export default {
    layout: 'vspSpring',
    data() {
      return {
        items,
      }
    },
    computed: {
      heads() {
        return [
          {
            title: '',
            icon: '',
            number: ''
          }
        ]
      }
    }
  }
</script>
