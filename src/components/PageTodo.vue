<template lang="jade">
.container
  #map_section
  .todo_section
    TodoCard(v-for="card in cards",
    :key="card.name",
    :name="card.name",
    :rating="card.rating",
    :price="card.price",
    :time="card.time",
    :address="card.address",
    :phone="card.phone",
    :description="card.description")
</template>

<script>
import TodoCard from '@/components/TodoCard'
import mapboxgl from 'mapbox-gl'

export default {
  name: 'PageTodo',
  components: {
    TodoCard
  },
  data () {
    return {
      cards: [
        {
          name: 'Eis-Greissler',
          rating: 'Must Must Do',
          price: '$5 / scoop',
          time: '5-30 min',
          address: '1 Stubenplatz, Vienna',
          phone: '1-432-714-9321',
          description: 'Best ice cream in the world. Specializes in organic unique flavors, including pumpkin seed.'
        },
        {

        }
      ]
    }
  },
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXpob25nMjEiLCJhIjoiMENiR1A5VSJ9.juucE1xKoXyVQWMT3nl7zA'
    const map = new mapboxgl.Map({
      container: 'map_section',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [16.3694624, 48.2162398],
      zoom: 9
    })
    console.log(map)
  }
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
.container
  height: calc(100% - 56px)
#map_section
  height: 45%
  background: $background-gray
.todo_section
  height: 55%
  width: 100%
  display: flex
  align-items: center
  padding-left: 1.5rem
  @extend .horizontal-scroll
</style>
