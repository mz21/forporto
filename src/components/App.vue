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
</style>
