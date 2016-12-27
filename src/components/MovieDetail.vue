<template lang="html">
  <div id="movieDetail">
    <div class="" v-if="showLoading">
      Loading...
    </div>
    <div class="" v-else>
      <div class="movie_detail-top">
        <div class="img_wrapper">
          <img :src="pic" alt="" />
        </div>

        <div class="rate_area">
          <div class="stars">
            <span class="rate_star" :class="star_1"></span>
            <span class="rate_star" :class="star_2"></span>
            <span class="rate_star" :class="star_3"></span>
            <span class="rate_star" :class="star_4"></span>
            <span class="rate_star" :class="star_5"></span>
          </div>

          <div class="score">
            {{ movieInfo.rating.average }}
          </div>

          <div class="ratings_count">
            {{ movieInfo.ratings_count }}人评价
          </div>

        </div>

      </div>

      <div class="summary">
        <p>
          {{ movieInfo.summary }}
        </p>
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
      showLoading: true,
      pic: '',
      movieInfo:'',
      star_1: 'gray',
      star_2: 'gray',
      star_3: 'gray',
      star_4: 'gray',
      star_5: 'gray'
    }
  },
  mounted() {
    axios.get('/api/movie/subject/' + this.$route.params.id)
      .then((response) => {
          this.showLoading = false
          this.movieInfo = response.data
          this.pic = response.data.images.large
          console.log(JSON.stringify(response.data.rating.average));
          if(response.data.rating.average > 2) {
            this.star_1 = 'active'
          }
          if(response.data.rating.average > 4) {
            this.star_2 = 'active'
          }
          if(response.data.rating.average > 6) {
            this.star_3 = 'active'
          }
          if(response.data.rating.average > 8) {
            this.star_4 = 'active'
          }
          if(response.data.rating.average > 9) {
            this.star_5 = 'active'
          }

      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss">
.movie_detail-top {
  margin: 10px;
  text-align: center;
  .img_wrapper {

  }
}

.rate_area {
  display: flex;
    align-items: center;
    justify-content: center;
}
.stars {
  display: inline-block;
  font-size: 0;
  .rate_star {
    width: 16px;
    height: 16px;
    display: inline-block;
    background-size: contain;
  }
  .active {
    background-image:url("../assets/star.png");
  }
  .gray {
    background-image:url("../assets/star_gray.png");
  }
}
.score {
  color: #f4694b;
}
.score, .ratings_count {
  display: inline-block;
  margin-left: 10px;
}
.summary {
  color: #666;
  font-size: 14px;
  padding: 0 20px;
}

</style>
