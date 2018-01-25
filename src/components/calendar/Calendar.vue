<template>
  <div id="calendar">
    <div class="calendar-buttons block">
      <button class="button is-dark">
        <b-icon icon="chevron-double-left"></b-icon>
      </button>
      <button class="button is-dark">
        <b-icon icon="chevron-left"></b-icon>
      </button>
      <button class="button is-dark">
        <b-icon icon="chevron-right"></b-icon>
      </button>
      <button class="button is-dark">
        <b-icon icon="chevron-double-right"></b-icon>
      </button>
    </div>
    <Schedule 
      :time-ground="['07:00', '18:00']" 
      :week-ground="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" 
      :task-detail="[
        [
          {
            dateStart: '09:30',
            dateEnd: '10:30',
            title: 'Heheh',
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: 'tutu',
          }

        ]
      ]">
    </Schedule>
  </div>
</template>

<script>
import Schedule from 'vue-schedule'

export default {
  components: {Schedule}
}
</script>

<style lang="scss" scoped>
.calendar-buttons {
  margin-left: 70px;
}
</style>
