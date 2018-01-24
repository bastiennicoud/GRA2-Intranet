<template>
  <div id="base-nav">

    <!-- The base navigation of the intranet -->
    <!-- He disblays global links, and provides a notification zone (for Cpnv's global infos...) -->
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="subtitle">
            Une zone pour communiquer des informations générales
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium is-fullwidth">
            <ul>

              <!-- All the navigation links, with a little icon -->
              <router-link tag="li" :to="{ name: 'home' }">
                <a><b-icon icon="home"></b-icon>Acceuil</a>
              </router-link>
              <router-link tag="li" to="calendar">
                <a><b-icon icon="calendar-multiple"></b-icon>Calendriers</a>
              </router-link>
              <router-link tag="li" to="infos">
                <a><b-icon icon="information"></b-icon>Informations</a>
              </router-link>
              <router-link tag="li" to="docs">
                <a><b-icon icon="file-document"></b-icon>Documents</a>
              </router-link>
              <router-link tag="li" to="lists">
                <a><b-icon icon="format-list-numbers"></b-icon>Listes</a>
              </router-link>
              <router-link tag="li" to="apps">
                <a><b-icon icon="apps"></b-icon>Applications</a>
              </router-link>
              <router-link tag="li" to="wiki">
                <a><b-icon icon="earth"></b-icon>Wiki</a>
              </router-link>

            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
