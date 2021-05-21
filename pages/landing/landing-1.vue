<template>
  <vsp-landing-time
    :background="config.background"
    :footer="config.footer"
    :card="config.card"
    :header="config.header"
    :title="config.title"
    :logo="config.logo"
    :subtitle="config.subtitle"
  >
    <v-container>
      <v-card flat>
        <h1>Sample Text</h1>
        <p>Hi this is some example text.</p>
      </v-card>
    </v-container>
  </vsp-landing-time>
</template>
<script>
  import config from './config'

  export default {
    data() {
      return {
        config
      }
    }
  }
</script>
