<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Intranet CPNV'
    }
  }
}
</script>

<style scoped>

.home {
  background-color: bisque;
}

</style>
