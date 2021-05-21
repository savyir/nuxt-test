<template>
  <data-form-page
    :value="main"
  />
</template>
<script>
  //
  import Fields from "./fields";
  import Info from "./config";

  export default {
    head() {
      return {
        title: Info.title
      }
    },
    data() {
      return {
        main: {
          formData: {},
          fields: Fields,
          ...Info,
        }
      }
    }
  }
</script>
