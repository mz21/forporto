<template lang="jade">
  .navigation
    .nav_container
      router-link(v-for="(tab, key) in tabs",
      :to="{ name: tab.name}",
      v-bind:class="{active: tab.active}",
      v-bind:key="key",
      v-on:click="changenav(key)").tab
        {{ tab.title }}
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      tabs: [
        {
          title: 'VIENNA',
          name: 'pageintro',
          active: true
        },
        {
          title: 'GETTING BY',
          name: 'pagegettingby'
        },
        {
          title: 'TO DO',
          name: 'pagetodo'
        },
        {
          title: 'ITINERARIES',
          name: 'pageitineraries'
        }
      ]
    }
  },
  methods: {
    changenav: function (tabId) {
      console.log('hiii')
      console.log(tabId)
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].active = false
      }
      this.tabs[tabId].active = true
    }
  }
}
</script>

<style scoped lang="sass">
.navigation
  width: 100%
  background: white
.nav_container
  width: 92%
  height: 3.5rem
  margin: 0 auto
  display: flex
  justify-content: space-around
  align-items: flex-start
  padding-top: 18px
.tab
  text-decoration: none
  color: rgb(196,196,196)
  font-weight: 600
  font-size: 0.6875rem
  letter-spacing: 0.1px
.active
  color: rgb(144,19,255)
  padding-bottom: 0.3rem
  border-bottom: 3px solid rgb(144,19,255)
</style>
