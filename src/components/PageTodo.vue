<template lang="jade">
.container
  .map_section
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
  }
}
</script>

<style scoped lang="sass">
.container
  height: calc(100% - 56px)
.map_section
  height: 45%
  background: rgb(248,248,248)
.todo_section
  height: 55%
  width: 100000px
  overflow: hidden
  display: flex
  align-items: center
  padding-left: 1.5rem
</style>
