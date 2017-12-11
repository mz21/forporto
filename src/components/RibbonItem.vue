<template lang="jade">
.ribbon_item
  .icon_section
    img(:src="icon").icon
    p.item_name {{ name }}
</template>

<script>
export default {
  name: 'RibbonItem',
  props: ['name', 'icon']
}
</script>

<style scoped lang="sass">
.ribbon_item
  background: white
  box-shadow: 0 2px 15px rgba(154,154,154,0.5)
  height: 55px
  width: 82.5px
  margin: 0 0.4rem
  display: flex
  align-items: center
  justify-content: center
  flex: 0 0 auto
.icon
  height: 29px
  width: auto
  display: block
  margin: 2px auto 2px auto
.item_name
  font-size: 7px
  letter-spacing: 0.2px
  font-weight: 600
  text-align: center
  text-transform: uppercase
  color: rgb(70,70,70)
  margin: 0
</style>
