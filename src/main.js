// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

Vue.use(VueRouter)

const routes = [
  {path: '/movielist', component: MovieList},
  {path: '/moviedetail/:id', name: 'movieDetail', component: MovieDetail}
]

const router = new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  ...App
})
