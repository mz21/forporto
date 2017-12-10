<template lang="jade">
  .nav
    router-link(:to="{ name: 'pageintro'}") VIENNA
    router-link(:to="{ name: 'pagegettingby'}") GETTING BY
    router-link(:to="{ name: 'pagetodo'}") TO DO
    router-link(:to="{ name: 'pageitineraries'}") ITINERARIES
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
