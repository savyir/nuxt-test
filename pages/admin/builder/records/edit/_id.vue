<template>
  <data-form-page
    v-model="main"
    :id="id"
  />
</template>
<script>
  import Fields from "../fields";
  import Info from "../config";

  export default {
    head() {
      return {
        title: Info.title
      }
    },
    data() {
      return {
        main: {
          fields: Fields,
          ...Info,
        },
        id: undefined
      }
    },
    async asyncData({params}) {
      return {id: params.id}
    }
  }
</script>
