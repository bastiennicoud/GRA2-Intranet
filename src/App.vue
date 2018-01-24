<template>
  <div id="app">
    <!-- Global app components -->
    <header-nav></header-nav>
    <base-nav></base-nav>
    <side-dashboard></side-dashboard>
    <!-- The router view (display content of the page) -->
    <router-view/>
  </div>
</template>

<script>
// imports sub-components
import HeaderNav from '@/components/nav/HeaderNav.vue'
import BaseNav from '@/components/nav/BaseNav.vue'
import SideDashboard from '@/components/dashboard/SideDashboard.vue'

export default {
  components: { HeaderNav, BaseNav, SideDashboard }
}
</script>

<style lang="scss">

// import own global vars
@import './assets/globals.scss';

* {
  //font-family: Helvetica, Arial, sans-serif;
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
