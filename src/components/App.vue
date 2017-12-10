<template lang="jade">
#app
  Navigation
  router-view
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
@import 'sanitize.css'
html, body, #app
  width: 100%
  height: 100%
  font-family: 'Avenir Next', Helvetica
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
</style>
