<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__item">
            <router-link tag="a" to="/">Home</router-link>
          </div>
          <div class="header__item">
            <router-link tag="a" to="/catalog">Catalog</router-link>
          </div>
          <div class="header__item"><a href="#">About</a></div>
          <div class="header__item"><a href="#">Contacts</a></div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'

export default {
  components: {
    HomePage: HomePage,
    CatalogPage: CatalogPage
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
  outline: none !important;
}

html {
  height: 100%;
  min-width: 320px;
  overflow-x: hidden;
}

body {
  font-size: 14px;
  font-weight: 300;
  font-family: "Gotham Pro", 'Arial', 'sans-serif';
  color: black;
  line-height: 1.5;
  position: relative;
  margin: 0;
}

.container {
  max-width: 1260px;
  margin: auto;
  padding: 0 40px;
}

/* Страница стилей */

p {
  display: block;
  margin: 0 0 20px;
  line-height: 1.7;
}

img {
  max-width: 100%;
  max-height: 100%;
}

a {
  display: inline;
  color: inherit;
  text-decoration: none;
  transition: .3s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
  padding-left: 30px;
  position: relative;
}

ul li:not(.b-nav__head):after {
  content: '';
  width: 10px;
  height: 1px;
  position: absolute;
  left: 0;
  top: 10px;
  background-color: green;
}

ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: li;
}

ol > li {
  position: relative;
  padding-left: 21px;
}

ol > li:before {
  counter-increment: li;
  content: counters(li,".") ". ";
  position: absolute;
  left: 0;
  top: 0;
  color: green;
}

button {
  border: 0;
  box-shadow: none;
  padding: 0;
}

input::-ms-clear {
  display: none;
}

.hidden {
  display: none;
}

b,
strong {
  font-weight: 700;
}

a {
  transition: ease .2s;
}

.header {
  height: 54px;
  margin-bottom: 50px;
  background-color: lightgreen;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
.header__inner {
  display: flex;
  justify-content: space-between;
}
.header__item {
  cursor: pointer;
  padding: 15px 20px;
}
.header__item:hover a {
  margin-bottom: 3px;
  color: darkgreen;
  border-bottom: 2px solid darkgreen;
}
.header__item a {
  color: dimgrey;
}

</style>
