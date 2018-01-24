<template>
  <div id="base-nav">

    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="subtitle">
            Primary title
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium is-fullwidth">
            <ul>
              <router-link tag="li" class="is-active" to="calendar">
                <a><b-icon icon="calendar-multiple"></b-icon>Calendriers</a>
              </router-link>
              <router-link tag="li" to="infos">
                <a>Informations</a>
              </router-link>
              <router-link tag="li" to="docs">
                <a>Documents</a>
              </router-link>
              <router-link tag="li" to="lists">
                <a>Listes</a>
              </router-link>
              <router-link tag="li" to="apps">
                <a>Applications</a>
              </router-link>
              <router-link tag="li" to="wiki">
                <a>Wiki</a>
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
      msg: 'Base nav'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
