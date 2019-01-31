<template>
  <div class="catalog">
    <sidebar></sidebar>
    <content-catalog></content-catalog>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import ContentCatalog from './ContentCatalog.vue'
export default {
  name: 'Catalog',
  components: {
    Sidebar: Sidebar,
    ContentCatalog: ContentCatalog
  },
  data () {
    return {
      msg: 'I am Catalog!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .catalog {
    display: flex;
    justify-content: space-between;
    width: 1020px;
    margin: 0 auto;
  }
</style>
