<template>
  <div class="content">
    <div class="box" v-for="item in $root.products" :key="item.index">
      <router-link
          tag="a"
          :key="item.id"
          :to="'/catalog/' + item.id">
        <span v-on:click="someFunction(item)">{{item.id}}: {{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCatalog',
  methods: {
    someFunction (value) {
      console.log(value)
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
  height: 250px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
</style>
