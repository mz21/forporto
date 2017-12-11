<template lang="jade">
.container
  .ribbon
    RibbonItem(v-for="item in ribbonItems",
    :key="item.name",
    :name="item.name",
    :icon="item.icon")
</template>

<script>
import RibbonItem from '@/components/RibbonItem'
import logo from '@/assets/logo.png'
export default {
  name: 'PageGettingBy',
  components: {
    RibbonItem
  },
  data () {
    return {
      ribbonItems: [
        {
          name: 'WHERE TO STAY',
          icon: logo
        },
        {
          name: 'TRANSPORTATION',
          icon: logo
        },
        {
          name: 'LANGUAGE',
          icon: logo
        },
        {
          name: 'SAFETY',
          icon: logo
        },
        {
          name: 'WEATHER',
          icon: logo
        },
        {
          name: 'VISA NOTES',
          icon: logo
        },
        {
          name: 'CURRENCY',
          icon: logo
        },
        {
          name: 'NEARBY CITIES',
          icon: logo
        },
        {
          name: 'RELIGION',
          icon: logo
        },
        {
          name: 'DISEASE',
          icon: logo
        },
        {
          name: 'FOR WOMEN',
          icon: logo
        },
        {
          name: 'ELECTRONICS',
          icon: logo
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
.container
  height: calc(100% - 56px)
  width: 100%
.ribbon
  height: 80px
  width: 100%
  display: flex
  align-items: center
  background: rgb(248,248,248)
  padding: 0 0.5rem
  flex-wrap: nowrap
  @extend .horizontal-scroll
</style>
