<template>
  <div>
    list:
    <list-page :value="main"/>
  </div>
</template>
<script>

  import fields from "./fields";
  import config from "./config";

  export default {
    layout: 'admin',
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
