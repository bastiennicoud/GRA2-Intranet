<template>
  <div id="calendar">

    <div class="columns is-mobile is-centered is-multiline">

      <div class="block column is-narrow">
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

      <div class="column is-half">
        <p class="has-text-centered">Horaire pour <strong>Bastien Nicoud</strong> du <strong>22 au 26 janvier 2017</strong></p>
      </div>

      <div class="block column is-narrow">
        <button class="button is-dark">
          <b-icon icon="calendar-plus"></b-icon>
        </button>
        <button class="button is-dark">
          <b-icon icon="calendar-remove"></b-icon>
        </button>
        <button class="button is-dark">
          <b-icon icon="calendar-clock"></b-icon>
        </button>
        <button class="button is-warning">
          <b-icon icon="printer"></b-icon>
        </button>
      </div>

    </div>

    <div class="columns is-mobile is-centered is-multiline">
      <div class="column">
        <Schedule 
          :time-ground="['07:00', '18:00']" 
          :week-ground="['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']" 
          :color="['#3498db']"
          :task-detail="calendarTasks">
        </Schedule>
      </div>
    </div>

  </div>
</template>

<script>
import Schedule from 'vue-schedule'

export default {
  components: {Schedule},
  data () {
    return {
      calendarTasks: [
        [
          {
            dateStart: '08:00',
            dateEnd: '09:35',
            title: 'ITIL',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '09:50',
            dateEnd: '12:15',
            title: 'Physique',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '13:30',
            dateEnd: '16:55',
            title: 'XML1',
            detail: 'SC-C332 -- FASOLA Sylvain'
          }
        ],
        [
          {
            dateStart: '08:00',
            dateEnd: '10:35',
            title: 'PRW2',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '10:40',
            dateEnd: '12:15',
            title: 'Mathématiques',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '13:30',
            dateEnd: '15:05',
            title: 'Anglais',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '15:20',
            dateEnd: '16:55',
            title: 'Français',
            detail: 'SC-C332 -- FASOLA Sylvain'
          }
        ],
        [
          {
            dateStart: '08:00',
            dateEnd: '12:15',
            title: 'GRA2',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '13:30',
            dateEnd: '16:05',
            title: 'UML1',
            detail: 'SC-C332 -- FASOLA Sylvain'
          }
        ],
        [
          {
            dateStart: '08:00',
            dateEnd: '10:35',
            title: 'MAW1.2 - Framework',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '10:40',
            dateEnd: '12:15',
            title: 'PMT1',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '14:20',
            dateEnd: '15:05',
            title: 'Gestion et organisation',
            detail: 'SC-C332 -- FASOLA Sylvain'
          }
        ],
        [
          {
            dateStart: '08:00',
            dateEnd: '09:35',
            title: 'Mathématiques',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '09:50',
            dateEnd: '12:15',
            title: 'MAW1.2 - Framework',
            detail: 'SC-C332 -- FASOLA Sylvain'
          },
          {
            dateStart: '13:30',
            dateEnd: '15:05',
            title: 'MAW1.2 - Framework',
            detail: 'SC-C332 -- FASOLA Sylvain'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
