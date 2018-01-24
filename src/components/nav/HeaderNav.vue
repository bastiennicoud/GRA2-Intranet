<!--
The hader nav is a little nav displayed on the top of the intranet.<template>
He display some utility links and user infos
-->

<template>
  <div id="header-nav">

    <nav class="navbar is-light">

      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../../assets/logo-intranet.svg" width="112" height="28">
        </a>

        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Liens utiles
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Mails
              </a>
              <a class="navbar-item" href="#">
                Médiatheque
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                support.cpnv.ch
              </a>
              <a class="navbar-item" href="#">
                data.cpnv.ch
              </a>
            </div>
          </div>
          <a class="navbar-item" href="#">cpnv.ch</a>
        </div>

        <div class="navbar-end">

          <div class="navbar-item">
            <b-field>
              <b-select placeholder="Selectionner le contexte">
                <option
                  v-for="option in options"
                  :value="option"
                  :key="option">
                  {{ option }}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button class="button is-info">
                  <b-icon icon="account"></b-icon>
                  <span>Bastien</span>
                </button>
              </p>

              <p class="control">
                <button class="button is-warning">
                  <b-icon icon="block-helper" size="is-small"></b-icon>
                  <span>Déconnexion</span>
                </button>
              </p>

            </div>
          </div>

        </div>
      </div>

    </nav>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['CPNV', 'CPNV Yverdon', 'CPNV Sainte-Croix', 'Filière info', 'Filière média', 'Filière polymecanique']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
