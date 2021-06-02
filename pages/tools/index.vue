<template>
  <v-container>
    <v-subheader><h2 class="font-14">tools and kits</h2></v-subheader>
    <vsp-reserve-item-list :separate="true" :items="items" sm="6" md="6" xl="6"/>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      }
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
      return {items}
    },
    layout: 'vspReservation'
  }
</script>
