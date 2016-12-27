<template lang="html">
  <div id="movieList">
    <div class="movie_list-wrapper">

      <div class="" v-if="showLoading">
        Loading...
      </div>

      <div class="movie-wrapper"  v-for="movie in movies">
        <router-link :to="{name: 'movieDetail', params: {id :movie.id}}">
          <img :src="movie.images.medium" alt="" />
        </router-lin>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'movieList',
  data() {
    return {
    movies:[],
    showLoading: true
    }
  },
  mounted() {
    axios.get('/api/movie/in_theaters')
      .then((response) => {
        this.showLoading = false
        response.data.subjects.map((subject) => {
          this.movies.push(subject)
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss">
.movie_list-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.movie-wrapper {
    display: block;
    background-color: #eee;
    width: 89px;
    padding: 5px;
    /* height: 116px; */
    margin: 10px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
