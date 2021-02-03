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
    data() {
      return {
        main: {
          fields,
          ...config
        }
      }
    }
  }
</script>
