<template>
  <div>
    <list-page :value="main" />
  </div>
</template>
<script>

  import fields from "./fields";
  import config from "./config";

  export default {
    layout: 'admin',
    created() {
    },
    data() {
      return {
        main: {
          ...config,
          fields
        }
      }
    }
  }
</script>
