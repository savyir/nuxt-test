<template>
  <v-container class="text-center grey" style="margin-top: -80px;">
    <v-card rounded light class="pa-5">
      <vsp-reserve-item-list :items="items"/>

    </v-card>
  </v-container>
</template>
<script>
  const items = [
    {
      title: 'Vuetify Strapi Dashboard',
      subTitle: 'open-source nuxt module',
      img: 'https://vsd.savyjs.com/banner.png',
      bookmark: false,
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
      img: 'https://vsp.savyjs.com/banner.png',
      bookmark: false,
      rows: [
        {icon: "flag", title: 'landing pages'},
        {icon: "star", title: 'login and register pages'},
        {icon: "check", title: 'e-commerce'},
        {icon: "money", title: 'strapi'},
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
      subTitle: 'share your content in telegram, twitter, youtube, site, ... with one click',
      img: '/pr.png',
      price: 25,
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
      to: 'PR tool'
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
