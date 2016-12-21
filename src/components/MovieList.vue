<template lang="html">
  <div id="movieList" class="clearfix">
    <div class="movie-wrapper"  v-for="pic in pics">
      <img :src="pic" alt="" />
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
.movie-wrapper {
    float: left;
    background-color: #f5f5f5;
    width: 78px;
    padding: 10px;

    height: 116px;
    margin: 10px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
