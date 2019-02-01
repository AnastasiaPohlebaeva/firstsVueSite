<template>
  <div class="error-page">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data () {
    return {
      msg: '404 Not Found'
    }
  }
}
</script>

<style>
</style>
