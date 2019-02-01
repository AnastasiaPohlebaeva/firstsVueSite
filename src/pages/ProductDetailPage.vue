<template>
  <div class="page">
    <h1>{{ msg }} - {{prodName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailPage',
  data () {
    return {
      props: ['prodName'],
      msg: 'I am Product Detail Page'
    }
  }
}
</script>

<style>
</style>
