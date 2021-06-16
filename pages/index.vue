<template>
  <v-container style="margin-top: -40px;">
    <v-card rounded class="pa-5">
      <v-subheader>Tools</v-subheader>
      <vsp-reserve-item-list :items="items" sm="6" md="6" xl="6"/>
    </v-card>
    <v-card class="pa-5 my-5" rounded>
      <v-subheader>About Me</v-subheader>
      <vsp-about-me-spring
        :rows="['Ehsan Afshari','Senior JS developer','Starting in 2010, PHP and Joomla',' Currently: Javascript (Strapi, Nuxtjs)']"
        :tags="['Javascript','Strapi','Nuxt','Vuetify','PHP','Laravel']"
        :social="social"
        :cta="social[0]"
        img="/ehsan-afshari.jpg"
      >
        Hi! I am Ehsan, freelance Javascript developer who loves Vue and Strapi.
        I create products using javascript and I am ready to build your smooth and powerful panel very fast.
        just send me a message and tell me what you need.
        my price is about 15$/hr and I promise it is more cheap to hire me than coding by your own.
      </vsp-about-me-spring>
    </v-card>
    <v-card class="pa-5 my-5" rounded>
      <vsp-contact-section-spring
        title="Contact Form"
        email="savvyversa@gmail.com"
        :social="social"
        api="/contacts"
      >
      </vsp-contact-section-spring>
    </v-card>
    <v-subheader>Last Post</v-subheader>
    <vsp-blog-latest-articles
      :articles="articles"
      :tags="tags"
    />
  </v-container>
</template>
<script>

  const social = [
    {color: 'blue darken-1', icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/ehsan-afshari-1192b6128/'},
    {color: 'grey', icon: 'fa fa-github', link: 'https://github.com/savyjs'},
    {color: 'light-green accent-4', icon: 'fa fa-whatsapp', link: 'https://wa.link/hne34w'},
    {color: 'cyan', icon: 'fa fa-twitter', link: 'https://twitter.com/savy_versa'},
    {color: 'orange', icon: 'fa fa-instagram', link: 'https://instagram.com/savy.versa'},
    {color: 'blue', icon: 'fa fa-telegram', link: 'https://t.me/savyversa'},
  ];

  export default {
    layout: 'vspReservation',
    data() {
      return {
        social,
        items: [],
        articles: undefined,
        tags: undefined,
        lastPosts: []
      }
    },
    async fetch({$axios}) {
      this.lastPosts = await $axios.$get('https://dev.to/api/articles/me/published', {headers: {'api-key': 'e6aLGT1SVzZ86U7N4fM6V77G'}}).catch(err => {
        console.error(1, {err});
      });
      console.log(2, this.lastPosts);
    },
    async asyncData({params, vsp, $content, $axios}) {
      const items = await $axios.$get('/products').catch(e => {
        console.error('e', {e});
      }).then(res => {
        console.log({res})
        res.map((item) => {
          console.log({item})
          item = Object.assign(item, item.meta)
          item.img = vsp.API_URL + item.image.url
          item.to = '/tools/details/' + item.slug
          item.price = item.price > 0 ? item.price : 'free (open-source)';
          return item;
        })
        return res;
      }).catch(err => {
        console.error({err})
      });
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch(err => {
          console.error({err})
        })
      const tags = await $content('tags')
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
        .catch(err => {
          console.error({err})
        })
      return {items, articles, tags}
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
