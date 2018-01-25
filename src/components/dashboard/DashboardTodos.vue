<template>
  <div id="dashboard-todos">

    <p class="title">Todo list</p>

    <p class="subtitle is-4">Mots-clefs</p>
    <p></p>

    <b-field>
      <b-taginput
        v-model="tags"
        icon="label"
        placeholder="Add a tag">
      </b-taginput>
    </b-field>

    <p class="subtitle is-4">Mes todos</p>

    <b-message title="URGENT - MAW 1.2" type="is-danger" :closable="false">
      Términer la documentation pour le projet MAW 1.2 !
    </b-message>
    <b-message title="Vue.js" :closable="false">
      Terminer lecture de la documentation.
    </b-message>

    <!-- Ajouter une nouvelle TODO -->
    <section>
      <b-field label="Nouvelle todo" expanded>
        <b-field>
          <b-select placeholder="Urgence">
            <option>Aucunne</option>
            <option>Légere</option>
            <option>Importante</option>
          </b-select>
          <b-input placeholder="Titre" expanded></b-input>
        </b-field>
      </b-field>
      <b-field>
        <b-input maxlength="200" type="textarea" placeholder="Descriptif"></b-input>
      </b-field>
      <button class="button is-info">
        <b-icon icon="check"></b-icon>
        <span>Ajouter</span>
      </button>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Dashb',
      tags: ['Justificat d\'absence', 'TE math vecteurs', 'Acheter capsules café']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
