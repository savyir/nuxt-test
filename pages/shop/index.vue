<template>
  <v-container>
    <vsp-shop-item-list
      link="media/show/details"
      base-url="http://localhost:1337"
      root="/shop/products"
      v-model="items"
    />
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    layout:'vspShop',
    async fetch() {
      this.items = await fetch('http://localhost:1337/products').then(res=>res.json());
    }
  }
</script>
