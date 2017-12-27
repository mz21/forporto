<template lang="jade">
container
  p hola
</template>

<script>
import Container from '@/components/Container'

export default {
  name: 'PageLanguage',
  components: {
    Container
  }
}
</script>

<style lang="sass" scoped>
.container
  height: calc(100% - 8.5rem)
</style>
