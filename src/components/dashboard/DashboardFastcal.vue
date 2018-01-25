<template>
  <div id="dashboard-fastcal">

    <p class="title is-spaced">Calendrier</p>

    <b-datepicker
      inline
      v-model="date" 
      :events="events"
      indicators="dots"
      >
      <button class="button is-primary"
        @click="date = new Date()">
        <b-icon icon="calendar-today"></b-icon>
        <span>Today</span>
      </button>
    </b-datepicker>

    <div class="mycal-message">
      <b-message title="Un evenement" type="is-info" :closable="false">
        Ici on peut imaginer des message d'infos liées a l'éléeve ?? Ou alors betement afficher les periodes du jour quant on clique sur une des dates dans le datepiecker...
      </b-message>
      <b-message title="TE de math" type="is-warning" :closable="false">
        TE sur les vecteurs ce vendredi !
      </b-message>
      <b-message title="Un evenement" type="is-info" :closable="false">
        Ici on peut imaginer des message d'infos liées a l'éléeve ?? Ou alors betement afficher les periodes du jour quant on clique sur une des dates dans le datepiecker...
      </b-message>
    </div>

  </div>
</template>

<script>
const thisMonth = new Date().getMonth()
const thisDay = new Date().getDay()

export default {
  data () {
    return {
      msg: 'Dashb',
      date: new Date(2018, thisMonth, thisDay),
      // Example envents to display in the datepiecker
      events: [
        new Date(2018, thisMonth, 2),
        new Date(2018, thisMonth, 6),
        {
          date: new Date(2018, thisMonth, 6),
          type: 'is-info'
        },
        {
          date: new Date(2018, thisMonth, 8),
          type: 'is-danger'
        },
        {
          date: new Date(2018, thisMonth, 10),
          type: 'is-success'
        },
        {
          date: new Date(2018, thisMonth, 10),
          type: 'is-link'
        },
        new Date(2018, thisMonth, 12),
        {
          date: new Date(2018, thisMonth, 12),
          type: 'is-warning'
        },
        {
          date: new Date(2018, thisMonth, 16),
          type: 'is-danger'
        },
        new Date(2018, thisMonth, 20),
        {
          date: new Date(2018, thisMonth, 29),
          type: 'is-success'
        },
        {
          date: new Date(2018, thisMonth, 29),
          type: 'is-warning'
        },
        {
          date: new Date(2018, thisMonth, 29),
          type: 'is-info'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mycal-message {
  margin: 20px 0px;
}
</style>
