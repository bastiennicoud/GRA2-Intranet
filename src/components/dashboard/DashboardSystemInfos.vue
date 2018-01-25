<template>
  <div id="dashboard-system-infos">

    <p class="title is-spaced">Etat des systemes informatiques</p>

    <div class="mycal-message">
      <b-message type="is-warning" has-icon>
        Ralentissements de la connection internet sur le site de Sainte-Croix.
      </b-message>
      <b-message type="is-danger" has-icon>
        MOOLDE.cpnv.ch momentanément indisponible.
      </b-message>
      <b-message type="is-info" has-icon>
        Des opérations de mise a jour des systemes seront éfectuées les 3 et 4 février. Il faut s'attendre a des ralentissements.
      </b-message>
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
