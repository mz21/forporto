import Vue from 'vue'
import Router from 'vue-router'
import PageIntro from '@/components/PageIntro'
import PageRecommendations from '@/components/PageRecommendations'
import PageWhatToKnow from '@/components/PageWhatToKnow'
import PageWhatToKnowIntro from '@/components/PageWhatToKnowIntro'
import PageLanguage from '@/components/PageLanguage'

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
      component: PageWhatToKnow,
      children: [
        {
          path: 'language',
          component: PageLanguage
        },
        {
          path: '',
          name: 'pagewhattoknow',
          component: PageWhatToKnowIntro
        }
      ]
    },
    {
      path: '/recommendations/',
      name: 'pagerecommendations',
      component: PageRecommendations
    }
  ]
})
