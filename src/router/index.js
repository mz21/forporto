import Vue from 'vue'
import Router from 'vue-router'
import PageIntro from '@/components/PageIntro'
import PageGettingBy from '@/components/PageGettingBy'
import PageItineraries from '@/components/PageItineraries'
import PageTodo from '@/components/PageTodo'

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
      path: '/todo/',
      name: 'pagetodo',
      component: PageTodo
    },
    {
      path: '/getting-by/',
      name: 'pagegettingby',
      component: PageGettingBy
    },
    {
      path: '/itineraries/',
      name: 'pageitineraries',
      component: PageItineraries
    }
  ]
})
