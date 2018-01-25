<template>
  <div id="side-dashboard" :class="collapsed">

    <div class="columns no-margins">
      <div class="column is-narrow is-gapless">
        <div class="dashboard-icons">

          TUTU

        </div>
      </div>

      <div v-if="collapse" class="column">

        TATA

      </div>
    </div>

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
  background-color: rgb(202, 202, 202)
}

.no-margins {
  margin: 0px;
}

.open {
  width: 240px;
}

.close {
  width: 60px;
}

.dashboard-icons {
  width: 60px;
}

.dashboard {
  width: 180px;
}
</style>
