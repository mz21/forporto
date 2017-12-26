<template lang="jade">
.howto
  .mapsections
    p hey
  .subnav
</template>

<script>
export default {
  name: 'PageIntro'
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
.howto
  height: calc(100% - #{$nav-height})
  width: 100%
.mapsections
  width: 100%
  height: calc(100% - #{$nav-height})
.subnav
  height: $nav-height
  width: 100%
  background: whitesmoke
</style>
