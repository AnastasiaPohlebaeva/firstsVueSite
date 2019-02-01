<template>
  <div class="content">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
</template>

<script>
export default {
  name: 'ContentCatalog',
  data () {
    return {
      msg: 'I am ContentCatalog!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: grid;
  width: calc(100% - 250px - 50px);
  margin: -10px;
  grid-template-columns: repeat(4, minmax(60px, 1fr));
}
.box {
  height: 242px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
</style>
