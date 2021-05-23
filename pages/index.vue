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
      subTitle: 'open-source nuxt module',
      img: '/vsd.png',
      bookmark: false,
      tagImages: [
        "https://badge.fury.io/js/vuetify-strapi-dashboard.png"
      ],
      rows: [
        {icon: "flag", title: 'Dashboard and CRM'},
        {icon: "star", title: 'CRUD'},
        {icon: "check", title: 'from generator'},
        {icon: "money", title: 'auth and role system'},
      ],
      tags: [
        {icon: "money", title: 'strapi'},
        {icon: "flag", title: 'i18n'},
        {icon: "star", title: 'axios'},
        {icon: "check", title: 'auth'},
      ],
      price: 'free',
      to: '/vsd'
    },
    {
      title: 'Vuetify Strapi Page',
      subTitle: 'open-source nuxt module',
      img: '/vsp.png',
      bookmark: false,
      tagImages: [
        "https://badge.fury.io/js/vuetify-strapi-page.png"
      ],
      rows: [
        {icon: "flag", title: 'landing pages'},
        {icon: "star", title: 'login and register pages'},
        {icon: "check", title: 'e-commerce'},
        {icon: "money", title: 'contact pages'},
      ],
      tags: [
        {icon: "flag", title: 'i18n'},
        {icon: "star", title: 'axios'},
        {icon: "check", title: 'auth'},
        {icon: "money", title: 'strapi'},
      ],
      price: 'free',
      to: '/vsp'
    },
    {
      title: 'Public Relation Panel',
      subTitle: 'share and track your contents in telegram, twitter, youtube, blog and other social platforms. build video from audio and image files and share as video.',
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
        {icon: "flag", title: 'nuxt', value: 'مقدار اول'},
        {icon: "star", title: 'strapi', value: 'مقدار دوم'},
        {icon: "check", title: 'laravel', value: 'مقدار سوم'},
      ],
      to: 'public-relation-javascript-cms'
    },
    {
      title: 'Advanced Twitter Follower Controll',
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
        {icon: "flag", title: 'nuxt', value: 'مقدار اول'},
        {icon: "star", title: 'strapi', value: 'مقدار دوم'},
        {icon: "check", title: 'laravel', value: 'مقدار سوم'},
        {icon: "check", title: 'twitter', value: 'مقدار سوم'},
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
