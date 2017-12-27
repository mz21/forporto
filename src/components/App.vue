<template lang="jade">
#app
  Navigation
  keep-alive
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
@import '~@/assets/fonts/GothamNarrowSsmBook'
@import '~@/assets/fonts/GothamNarrowSsmMedium'
p, h1, h2, h3, h4, h5, h6
  margin: 0
html, body, #app
  width: 100%
  height: 100%
  font-family: 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', 'Avenir Next', Helvetica
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
html
  background: rgb(235,235,235)
#app
  margin: 30px auto
  max-width: 320px
  max-height: 568px
  background: white
  position: relative
</style>
