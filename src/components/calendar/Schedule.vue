<template>
  <div id="schedule">
    <div class="tabs">
      <ul>
        <router-link tag="li" :to="{ name: 'calendar' }">
          <a><b-icon icon="calendar"></b-icon>Agenda</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'absence' }">
          <a><b-icon icon="calendar-remove"></b-icon>Absences</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'events' }">
          <a><b-icon icon="calendar-text"></b-icon>Evenements</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'booking' }">
          <a><b-icon icon="calendar-check"></b-icon>Reservations</a>
        </router-link>
      </ul>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Calendar'
    }
  },
  mounted () {
    this.$router.push({
      name: 'calendar'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
