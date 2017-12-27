<template lang="jade">
container
  p boroughs
</template>

<script>
import Container from '@/components/Container'

export default {
  name: 'PageBoroughs',
  components: {
    Container
  }
}
</script>

<style lang="sass" scoped>
.container
  height: calc(100% - 8.5rem)
</style>
