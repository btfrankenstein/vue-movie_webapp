<template>
<div id="app">
  <movieList></movieList>
</div>
</template>

<script>
import Hello from './components/Hello'
import MovieList from './components/MovieList'


export default {
  name: 'app',
  components: {
    MovieList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}
</style>
