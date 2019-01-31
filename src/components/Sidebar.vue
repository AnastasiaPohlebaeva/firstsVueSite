<template>
  <div class="sidebar">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
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
  width: 200px;
}
</style>
