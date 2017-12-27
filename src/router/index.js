import Vue from 'vue'
import Router from 'vue-router'
import PageIntro from '@/components/PageIntro'
import PageRecommendations from '@/components/PageRecommendations'
import PageWhatToKnow from '@/components/PageWhatToKnow'
import PageWhatToKnowIntro from '@/components/PageWhatToKnowIntro'
import PageBoroughs from '@/components/PageBoroughs'
import PageCulture from '@/components/PageCulture'
import PageDemographics from '@/components/PageDemographics'
import PageLanguage from '@/components/PageLanguage'
import PageGetAround from '@/components/PageGetAround'
import PageSafety from '@/components/PageSafety'
import PageWeather from '@/components/PageWeather'
import PageCurrency from '@/components/PageCurrency'
import PageVisa from '@/components/PageVisa'
/* Sub Sub Pages */
import PagePhrases from '@/components/PagePhrases'

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
          path: '',
          name: 'pagewhattoknow',
          component: PageWhatToKnowIntro
        },
        {
          path: 'boroughs',
          name: 'pageboroughs',
          component: PageBoroughs
        },
        {
          path: 'culture',
          name: 'pageculture',
          component: PageCulture
        },
        {
          path: 'demographics',
          name: 'pagedemographics',
          component: PageDemographics
        },
        {
          path: 'language',
          name: 'pagelanguage',
          component: PageLanguage,
          children: [
            {
              path: '',
              name: 'pagephrases',
              component: PagePhrases
            }
          ]
        },
        {
          path: 'get-around',
          name: 'pagegetaround',
          component: PageGetAround
        },
        {
          path: 'safety',
          name: 'pagesafety',
          component: PageSafety
        },
        {
          path: 'weather',
          name: 'pageweather',
          component: PageWeather
        },
        {
          path: 'currency',
          name: 'pagecurrency',
          component: PageCurrency
        },
        {
          path: 'visa-entry',
          name: 'pagevisa',
          component: PageVisa
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
