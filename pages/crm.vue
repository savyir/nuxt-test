<template>
  <nuxt/>
</template>
<script>
  export default {
    layout: 'vsdCrm',
    auth: 'user',
    middleware: ['auth']
  }
</script>
