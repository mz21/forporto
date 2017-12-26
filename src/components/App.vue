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
@font-face
  font-family: GothamNarrow
  src: url("~@/assets/fonts/GothamNarrow-Book.otf") format("opentype")
p, h1, h2, h3, h4, h5, h6
  margin: 0
html, body, #app
  width: 100%
  height: 100%
  font-family: GothamNarrow, 'Avenir Next', Helvetica
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
html
  background: rgb(235,235,235)
#app
  margin: 30px auto
  max-width: 320px
  max-height: 568px
  background: white
</style>
