<template>
  <div>
    list:
    <list-page :value="main"/>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        main: {
          title: 'Customers',
          resource: 'customers',
        }
      }
    }
  }
</script>
