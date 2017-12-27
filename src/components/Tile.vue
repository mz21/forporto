<template lang="jade">
.big_tile
  .img_section
    img(v-bind:src="icon")
  p.title {{ title }}
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
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center
  justify-content: center
  .img_section
    width: 100%
    img
      display: block
      margin: 0 auto
      width: auto
      height: 24px
  p.title
    font-size: $smallest-text
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 0.1px
    color: $text-color
    padding-top: calc(1.3 * #{$smallest-text})
</style>
