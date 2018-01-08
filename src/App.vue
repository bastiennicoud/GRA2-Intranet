<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
// import the bulma css framework
@import '~bulma';

// import own global vars
@import './assets/globals.scss';

* {
  font-family: Helvetica, Arial, sans-serif;
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
