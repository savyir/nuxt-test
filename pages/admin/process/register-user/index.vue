<template>
  <div>
    <process-list-page :value="main" />
  </div>
</template>
<script>

  import config from "./config";

  export default {
    layout: 'vsd',
    created() {
    },
    data() {
      return {
        main: {
          ...config
        }
      }
    }
  }
</script>
