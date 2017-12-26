<template lang="jade">
  .navigation
    .nav_container
      router-link(v-for="(tab, key) in tabs",
      :to="{ name: tab.name}",
      v-bind:class="{active: tab.active}",
      v-bind:key="key",
      v-on:click.native="changenav(key)").tab
        {{ tab.title }}
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      tabs: [
        {
          title: 'At a Glance',
          name: 'pageintro',
          active: true
        },
        {
          title: 'Recommendations',
          name: 'pagerecommendations',
          active: false
        },
        {
          title: 'What to Know',
          name: 'pagewhattoknow',
          active: false
        }
      ]
    }
  },
  methods: {
    changenav: function (tabId) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].active = false
      }
      this.tabs[tabId].active = true
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
.navigation
  width: 100%
  background: whitesmoke
  height: $nav-height
  box-shadow: 0 2px 3px rgba(190,190,190,0.5)
.nav_container
  width: 92%
  margin: 0 auto
  display: flex
  justify-content: space-around
  align-items: flex-start
  padding-top: 18px
.tab
  text-decoration: none
  color: rgb(40,40,40)
  font-weight: 500
  font-size: 10px
  text-transform: uppercase
.active
  color: $purple
  padding-bottom: 0.3rem
  border-bottom: 3px solid $purple
</style>
