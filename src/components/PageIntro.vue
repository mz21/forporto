<template lang="jade">
container
  #map_section
  subnav

</template>

<script>
import Container from '@/components/Container'
import Subnav from '@/components/Subnav'
import mapboxgl from 'mapbox-gl'

export default {
  name: 'PageIntro',
  components: {
    Container,
    Subnav
  },
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXpob25nMjEiLCJhIjoiMENiR1A5VSJ9.juucE1xKoXyVQWMT3nl7zA'
    const map = new mapboxgl.Map({
      container: 'map_section',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-8.6135977, 41.1535069],
      zoom: 11.8
    })
    console.log(map)
  }
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
#map_section
  width: 100%
  height: 100%
.subnav
  height: $nav-height
  width: 100%
  background: whitesmoke
</style>
