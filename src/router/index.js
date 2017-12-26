import Vue from 'vue'
import Router from 'vue-router'
import PageIntro from '@/components/PageIntro'
import PageWhatToKnow from '@/components/PageWhatToKnow'
import PageRecommendations from '@/components/PageRecommendations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pageintro',
      component: PageIntro
    },
    {
      path: '/know/',
      name: 'pagewhattoknow',
      component: PageWhatToKnow
    },
    {
      path: '/recommendations/',
      name: 'pagerecommendations',
      component: PageRecommendations
    }
  ]
})
