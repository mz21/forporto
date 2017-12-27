<template lang="jade">
.container
  h5.tagline Tell me more about...
  .tiles_section
    .tile_wrapper(v-for="tile in tiles")
      tile(style="big" title="tile.title")
</template>

<script>
import Tile from '@/components/Tile'

export default {
  name: 'PageWhatToKnow',
  components: {
    Tile
  },
  data () {
    return {
      tiles: [
        {
          title: 'DEMOGRAPHICS'
        },
        {
          title: 'LANGUAGE'
        },
        {
          title: 'GET AROUND'
        },
        {
          title: 'CRIME / SAFETY'
        },
        {
          title: 'WEATHER'
        },
        {
          title: 'POLITICS'
        },
        {
          title: 'VISA ENTRY'
        },
        {
          title: 'CURRENCY'
        }
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'

.container
  background: rgb(253,250,254)
.tiles_section
  width: 100%
  display: flex
  flex-wrap: wrap
  justify-content: center
.tile_wrapper
  margin: 12px
.tagline
  font-family: 'GothamNarrow', 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', Arial, Helvetica
  font-size: $big-text
  font-weight: 400
  font-style: italic

</style>
