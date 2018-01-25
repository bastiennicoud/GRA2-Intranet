import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Schedule from '@/components/calendar/Schedule.vue'
import Calendar from '@/components/calendar/Calendar.vue'
import Absence from '@/components/calendar/Absence.vue'
import Events from '@/components/calendar/Events.vue'
import Booking from '@/components/calendar/Booking.vue'

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
      path: '/shedule',
      name: 'shedule',
      component: Schedule,
      children: [
        {
          path: 'calendar',
          name: 'calendar',
          component: Calendar
        },
        {
          path: 'absence',
          name: 'absence',
          component: Absence
        },
        {
          path: 'events',
          name: 'events',
          component: Events
        },
        {
          path: 'booking',
          name: 'booking',
          component: Booking
        }
      ]
    },
    {
      path: '/infos',
      name: 'infos',
      component: Home
    },
    {
      path: '/lists',
      name: 'lists',
      component: Home
    },
    {
      path: '/docs',
      name: 'docs',
      component: Home
    },
    {
      path: '/apps',
      name: 'apps',
      component: Home
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: Home
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
