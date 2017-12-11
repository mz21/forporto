<template lang="jade">
.todo_card
  .top_section
    img(:src="logo").todo_img
    .filter_section
      p.label_tag RATING
      p.label_info {{ rating }}
      p.label_tag PRICE
      p.label_info {{ price }}
      p.label_tag TIME
      p.label_info {{ time }}
  .bottom_section
    .place_section
      .place_name_section
        p.place_name {{ name }}
      .place_info_section
        p.place_address {{ address }}
        p.place_phone {{ phone }}
    p.description {{ description }}
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'TodoCard',
  props: ['name', 'rating', 'price', 'time', 'address', 'phone', 'description'],
  data () {
    return {
      logo
    }
  }
}
</script>

<style scoped lang="sass">
.todo_card
  width: 240px
  height: 240px
  box-shadow: 0 2px 6px rgba(113,113,113,0.5)
  border-top: 3px solid rgba(144,19,255, 0.5)
  margin-right: 2rem
.todo_img
  width: 57%
  height: auto
  border: 1px solid rgb(235,235,235)
.top_section, .bottom_section
  width: 90%
  margin: 0 auto
.top_section
  display: flex
  height: 60%
  align-items: flex-start
  padding-top: 5px
.filter_section
  height: 100%
  width: 46%
  padding-left: 3%
  align-items: center
.label_tag
  letter-spacing: 0.2px
  font-weight: 600
  color: rgb(184,184,184)
  font-size: 0.625rem
  margin: 0.5rem 0 0.1rem 0
.label_info
  font-weight: 500
  color: rgb(40,40,40)
  font-size: 0.75rem
  margin: 0
.bottom_section
  height: 40%
.place_section
  display: flex
  align-items: flex-start
.place_name_section
  border-right: 1px solid rgb(230,230,230)
  padding-right: 0.3rem
.place_name
  font-size: 1rem
  font-weight: 600
  color: rgb(30,29,30)
  margin: 0
.place_info_section
  padding-left: 0.3rem
.place_address, .place_phone
  font-size: 0.5rem
  margin: 0
.description
  color: rgb(115,115,115)
  font-size: 0.6875rem

</style>
