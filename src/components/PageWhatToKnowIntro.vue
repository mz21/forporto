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
import iconBoroughs from '@/assets/icons/boroughs.svg'
import iconCulture from '@/assets/icons/culture.svg'
import iconDemographics from '@/assets/icons/demographics.svg'
import iconGetAround from '@/assets/icons/getaround.svg'
import iconLanguage from '@/assets/icons/language.svg'
import iconPolitics from '@/assets/icons/politics.svg'
import iconWeather from '@/assets/icons/weather.svg'
import iconCurrency from '@/assets/icons/currency.svg'
import iconVisa from '@/assets/icons/visa.svg'
import iconSafety from '@/assets/icons/safety.svg'

export default {
  name: 'PageWhatToKnowIntro',
  components: {
    Tile
  },
  data () {
    return {
      tiles: [
        {
          title: 'BOROUGHS',
          route: 'boroughs',
          icon: iconBoroughs
        },
        {
          title: 'CULTURE',
          route: 'culture',
          icon: iconCulture
        },
        {
          title: 'DEMOGRAPHICS',
          route: 'demographics',
          icon: iconDemographics
        },
        {
          title: 'LANGUAGE',
          route: 'language',
          icon: iconLanguage
        },
        {
          title: 'GET AROUND',
          route: 'get-around',
          icon: iconGetAround
        },
        {
          title: 'SAFETY / CRIME',
          route: 'safety',
          icon: iconSafety
        },
        {
          title: 'WEATHER',
          route: 'weather',
          icon: iconWeather
        },
        {
          title: 'CURRENCY',
          route: 'currency',
          icon: iconCurrency
        },
        {
          title: 'VISA ENTRY',
          route: 'visa',
          icon: iconVisa
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
  a
    text-decoration: none !important
.tagline
  font-family: 'GothamNarrow', 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', Arial, Helvetica
  font-size: $big-text
  padding: $big-text
  font-weight: 400
  font-style: italic
  color: $text-color
</style>
