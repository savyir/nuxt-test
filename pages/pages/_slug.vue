<template>
  <vsp-blog-show-content :params="params"/>
</template>
<script>
  export default {
    layout: 'vspBlog',
    data() {
      return {
        params: []
      }
    },
    async asyncData(ctx) {
      return {params: ctx.params}
    }
  }
</script>
