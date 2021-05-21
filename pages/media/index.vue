<template>
  <v-container>
    <vsp-media-list
      link="media/show/details"
      :items="podcasts"
    />
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        podcasts: []
      }
    },
    async fetch() {
      this.podcasts = await fetch('http://api.alphapluspod.ir/podcasts').then(res=>res.json());
    }
  }
</script>
