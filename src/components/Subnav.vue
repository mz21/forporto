<template lang="jade">
.container
  .subnav_content
  #next_button
    p NEXT
</template>

<script>
export default {
  name: 'Subnav'
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'

.container
  width: 100%
  background: whitesmoke
  height: $nav-height
  box-shadow: 0 -1px 2px $shadow
  position: absolute
  bottom: 0
  z-index: 99
  display: flex
.subnav_content
  width: calc(100% - 64px)
#next_button
  width: 64px
  height: $nav-height
  box-shadow: -1px 1px 2px $shadow
  background: $med-purple
  display: flex
  justify-content: center
  align-items: center
  p
    color: rgb(241,241,241)
    font-size: $small-text
    font-weight: 600
</style>
