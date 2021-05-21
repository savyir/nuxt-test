<template>
  <process-show-page
    :config="main"
    :id="id"
  />
</template>
<script>
  import Info from "./config";

  export default {
    head() {
      return {
        title: Info.title
      }
    },
    data() {
      return {
        id: undefined,
        main: {
          ...Info
        }
      }
    },
    async asyncData({params}) {
      return {id: params.id}
    }
  }
</script>
