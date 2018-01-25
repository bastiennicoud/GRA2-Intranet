<template>
  <div id="side-dashboard" :class="collapsed">

    <div class="columns no-margins">
      <div class="column is-narrow is-gapless">
        <div class="dashboard-icons">

          <b-tooltip type="is-light" label="Vue d'ensemble" position="is-right">
            <button class="button is-info" @click="open('overview')">
              <b-icon icon="view-dashboard"></b-icon>
            </button>
          </b-tooltip>

          <b-tooltip type="is-light" label="Calendrier rapide" position="is-right">
            <button class="button is-info mg-10" @click="open('fastcal')">
              <b-icon icon="calendar"></b-icon>
            </button>
          </b-tooltip>
          
          <b-tooltip type="is-light" label="Liens favoris" position="is-right">
            <button class="button is-info mg-10" @click="open('starred')">
              <b-icon icon="star"></b-icon>
            </button>
          </b-tooltip>
          
          <b-tooltip type="is-light" label="Etat des systèmes" position="is-right">
            <button class="button is-info mg-10" @click="open('system')">
              <b-icon icon="alert-circle"></b-icon>
            </button>
          </b-tooltip>
          

        </div>
      </div>

      <div v-if="collapse" class="column">

        <div v-if="section == 'overview'">
          TUTU
        </div>
        <div v-if="section == 'fastcal'">
          TUTUTU
        </div>
        <div v-if="section == 'starred'">
          TUTU
        </div>
        <div v-if="section == 'system'">
          TUTUTu
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Dashb',
      collapse: false,
      section: 'overview'
    }
  },
  computed: {

    // this computed property watch the state of the dashboard and return the right class to controll the width
    collapsed () {
      return this.collapse ? 'open' : 'close'
    }
  },
  methods: {
    open (section) {
      if (this.section !== section) {
        this.section = section
      } else {
        this.collapse ? this.collapse = false : this.collapse = true
      }
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

.mg-10 {
  margin-top: 10px;
}
</style>
