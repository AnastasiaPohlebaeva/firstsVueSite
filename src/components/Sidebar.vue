<template>
  <div class="sidebar">
    <div class="sidebar__inner">
      <a href="#">1 filter</a>
      <a href="#">2 filter</a>
      <a href="#">3 filter</a>
      <a href="#">4 filter</a>
      <a href="#">5 filter</a>
      <a href="#">6 filter</a>
      <a href="#">7 filter</a>
      <a href="#">8 filter</a>
      <a href="#">9 filter</a>
      <a href="#">10 filter</a>
      <a href="#">11 filter</a>
      <a href="#">12 filter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      msg: 'I am sidebar!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  width: 250px;
  margin-right: 50px;
}
.sidebar__inner,
.sidebar__inner a{
  display: block;
  text-align: left;
}
.sidebar__inner{
  border: 1px solid black;
}
.sidebar__inner a {
  padding: 10px;
}
.sidebar__inner a:not(:last-of-type) {
  border-bottom: 1px solid black;
}
.sidebar__inner a:hover {
  color: darkgreen;
  background-color: lightgrey;
  font-weight: 700;
}
</style>
