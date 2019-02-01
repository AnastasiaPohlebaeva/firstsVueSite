<template>
  <div class="page">
    <div class="container">
      <div class="catalog">
        <sidebar></sidebar>
        <content-catalog></content-catalog>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import ContentCatalog from '../components/ContentCatalog.vue'

export default {
  name: 'Catalog',
  components: {
    Sidebar: Sidebar,
    ContentCatalog: ContentCatalog
  }
}
</script>

<style>
  .catalog {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
