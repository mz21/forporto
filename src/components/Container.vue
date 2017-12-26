<template lang="jade">
.container
  slot
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'

.container
  height: calc(100% - #{$nav-height})
  overflow-y: auto
</style>
