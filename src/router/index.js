import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScheduleCalendar from '@/components/calendar/ScheduleCalendar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: ScheduleCalendar
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  linkActiveClass: 'is-active'
})
