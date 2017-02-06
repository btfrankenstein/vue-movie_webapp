<template>
<div id="app">
  <nav>
    <div class="nav_bar">

        <li>
          <router-link to="/movielist">电影列表</router-link>
        </li>
        <!-- <li>
          <router-link to="/movielist">列表</router-link>
        </li> -->

    </div>
  </nav>

  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    padding: 0;
    margin: 0;
}

li {
    display: block;
    text-decoration: none;
}

nav {
    background-color: #2c3e50;
    color: #41b883;
}

:focus {
    outline: none;
}

.nav_bar {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    a:active {
        color: #35966b;
    }
    ul {
        padding: 0 20px;
    }
}
.clearfix:after,
.clearfix:before {
    content: " ";
    display: table;
    clear: both;
}
</style>
