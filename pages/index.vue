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
        {icon: "check", title: 'dashboard and CRM'},
        {icon: "check", title: 'simple and 2FA login pages'},
        {icon: "check", title: 'advanced CRUD system'},
        {icon: "check", title: 'filter, sort, search and excel report'},
        {icon: "check", title: 'form generator'},
        {icon: "check", title: 'side menu'},
        {icon: "check", title: 'site settings'},
        {icon: "check", title: 'notification system'},
        {icon: "check", title: 'custom API integration'},
        {icon: "check", title: 'pop-ups, modal and snackbar system'},
        {icon: "check", title: 'user, auth and role system'},
        {icon: "check", title: 'RTL support'},
      ],
      tags: [
        {icon: "star", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
        {icon: "flag", title: 'i18n'},
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
        {icon: "check", title: 'multiple landing pages'},
        {icon: "check", title: 'different marketing campaign pages'},
        {icon: "check", title: 'login and register pages'},
        {icon: "check", title: 'reservation system'},
        {icon: "check", title: 'podcast blog'},
        {icon: "check", title: 'educational and informative blog'},
        {icon: "check", title: 'invoice pages'},
        {icon: "check", title: 'e-commerce and online-shop pages'},
        {icon: "check", title: 'about-us pages'},
        {icon: "check", title: 'contact-us pages'},
        {icon: "check", title: 'RTL support'},
        {icon: "check", title: 'SEO optimization'},
      ],
      tags: [
        {icon: "star", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
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
        {icon: "check", title: 'easy to use, share, track'},
        {icon: "check", title: 'SEO optimization'},
        {icon: "check", title: 'twitter'},
        {icon: "check", title: 'telegram'},
        {icon: "check", title: 'youtube'},
        {icon: "check", title: 'linkedin'},
        {icon: "check", title: 'instagram and facebook'},
        {icon: "check", title: 'blog and podcast site'},
        {icon: "check", title: 'RSS'},
      ],
      tags: [
        {icon: "star", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
        {icon: "star", title: 'Laravel'},
        {icon: "check", title: 'documentation'},
        {icon: "check", title: 'customization'},
        {icon: "help", title: 'support'},
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
        {icon: "check", title: 'easy usage, simple panel'},
        {icon: "check", title: 'estimate time finding unfollowers'},
        {icon: "check", title: 'unfollowers management'},
        {icon: "check", title: 'friends management'},
        {icon: "check", title: 'faved tweets log'},
        {icon: "check", title: 'automatic and smart favorite list'},
        {icon: "check", title: 'twitter API limit management'},
        {icon: "check", title: 'create white-list and black-list'},
        {icon: "check", title: 'block, mute, unfollow, search other accounts'},
      ],
      tags: [
        {icon: "star", title: 'Nuxt'},
        {icon: "star", title: 'Strapi'},
        {icon: "star", title: 'Laravel'},
        {icon: "check", title: 'documentation'},
        {icon: "check", title: 'customization'},
        {icon: "help", title: 'support'},
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
