<template>
  <div id="dashboard-overview">

    <p class="title">Dashboard</p>

    <p class="subtitle is-4">Actuellement</p>

    <b-message title="GRA1 - SC332" type="is-info" :closable="false">
      Module graphisme 2 - MOTTIER André
    </b-message>

    <p class="subtitle is-4">Prochainement</p>

    <b-message title="MAW1.2 - SC332" type="is-info" :closable="false">
      Projet semestriel 1.2 - HURNI Pascal
    </b-message>

    <p class="subtitle is-4">Acces a internet</p>

    <b-message type="is-success" has-icon>
      <strong>Ouvert</strong>
    </b-message>

    <p class="subtitle is-4">Pages récentes</p>

    <div class="menu">
      <ul class="menu-list">
        <li><a>Agenda</a></li>
        <li><a>Absences</a></li>
        <li><a>MSDN academic alliance</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Dashb'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
