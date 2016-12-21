<template lang="html">
  <div id="movieList">
    <div class="movie_list-wrapper">
      <div class="movie-wrapper"  v-for="pic in pics">
        <img :src="pic" alt="" />
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
      pics: [],
      company: 'Marvel'
    }
  },
  mounted() {
    axios.get('/api/movie/in_theaters')
      .then((response) => {
        // console.log(JSON.stringify(response));
        response.data.subjects.map((sub) => {
          this.pics.push(sub.images.medium)
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
