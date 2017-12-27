<template lang="jade">
container
  router-view
  subnav
</template>

<script>
import Container from '@/components/Container'
import Subnav from '@/components/Subnav'

export default {
  name: 'PageLanguage',
  components: {
    Container,
    Subnav
  }
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'
.tagline
  font-family: GothamNarrow, 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', Arial, Helvetica
  font-size: $big-text
  padding: $big-text
  font-weight: 400
  color: $text-color
</style>
