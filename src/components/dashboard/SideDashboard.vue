<template>
  <div id="side-dashboard" :class="collapsed">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Dashb',
      collapse: false
    }
  },
  computed: {

    // this computed property watch the state of the dashboard and return the right class to controll the width
    collapsed () {
      return this.collapse ? 'open' : 'close'
    }
  }
}
</script>

<style lang="scss" scoped>
#side-dashboard {
  height: 100%;
  background-color: rgb(190, 87, 87)
}

.open {
  width: 240px;
}

.close {
  width: 60px;
}
</style>
