<template>
  <div id="app">

    <!-- Global app navigation -->
    <header-nav></header-nav>
    <base-nav></base-nav>

    <!-- App content -->
    <div class="columns is-gapless">
      <div class="column is-narrow">

        <!-- Displays the dashboard in the left of the site -->
        <side-dashboard></side-dashboard>

      </div>

      <div class="column">

        <!-- The router view (display content of the page) -->
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>

      </div>
    </div>

    <!-- App footer -->
    <app-footer></app-footer>

  </div>
</template>

<script>
// imports sub-components
import HeaderNav from '@/components/nav/HeaderNav.vue'
import BaseNav from '@/components/nav/BaseNav.vue'
import SideDashboard from '@/components/dashboard/SideDashboard.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { HeaderNav, BaseNav, SideDashboard, AppFooter }
}
</script>

<style lang="scss">

// import own global vars
@import './assets/globals.scss';

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100%;
}

body {
  min-height: 100%;
}

</style>
