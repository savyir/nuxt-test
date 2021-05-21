<template>
  <process-data-form-page
    v-model="formData"
    :id="id"
    :config="config"
  />
</template>
<script>
  import Config from "../config";

  export default {
    head() {
      return {
        title: Config.title
      }
    },
    data() {
      return {
        id: undefined,
        formData: {},
        config: Config
      }
    },
    async asyncData({params}) {
      return {id: params.id}
    }
  }
</script>
