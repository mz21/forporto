<template lang="jade">
.container
  h5.tagline Tell me more about...
  .tiles_section
    .tile_wrapper(v-for="tile in tiles")
      router-link(v-bind:to="tile.route")
        tile(style="big" v-bind:title="tile.title" v-bind:icon="tile.icon")
</template>

<script>
import Tile from '@/components/Tile'
import icon from '@/assets/icons/language.svg'

export default {
  name: 'PageWhatToKnow',
  components: {
    Tile
  },
  data () {
    return {
      tiles: [
        {
          title: 'DEMOGRAPHICS',
          route: 'language',
          icon: icon
        },
        {
          title: 'LANGUAGE',
          route: 'language',
          icon: icon
        },
        {
          title: 'GET AROUND',
          route: 'language',
          icon: icon
        },
        {
          title: 'CRIME / SAFETY',
          route: 'language',
          icon: icon
        },
        {
          title: 'WEATHER',
          route: 'language',
          icon: icon
        },
        {
          title: 'POLITICS',
          route: 'language',
          icon: icon
        },
        {
          title: 'VISA ENTRY',
          route: 'language',
          icon: icon
        },
        {
          title: 'CURRENCY',
          route: 'language',
          icon: icon
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'

.container
  background: rgb(253,250,254)
  height: 100%
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
  padding: $big-text
  font-weight: 400
  font-style: italic
  color: rgb(40,40,40)
</style>
