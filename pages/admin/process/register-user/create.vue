<template>
  <process-data-form-page
    v-model="formData"
    :config="config"
  />
</template>
<script>
  //
  import Config from "./config";

  export default {
    head() {
      return {
        title: Config.title
      }
    },
    data() {
      return {
        formData:{},
        config: Config
      }
    }
  }
</script>
