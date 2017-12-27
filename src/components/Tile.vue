<template lang="jade">
.big_tile
  p.title {{ title }}
  img(v-bind:src="icon")
</template>

<script>
export default {
  name: 'PageWhatToKnow',
  props: ['title', 'icon']
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'

.big_tile
  width: 75px
  height: 75px
  background: white
  box-shadow: 0 2px 4px $shadow
  p.title
    font-size: $smallest-text
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 0.2px
</style>
