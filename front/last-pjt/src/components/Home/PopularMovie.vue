<template>
  <div>
    <h2>인기영화</h2>
    <movie-card
      v-for="movie in popularMovies" 
      :key="movie.pk"
      :movie="movie"
    ></movie-card>
  </div>
</template>

<script>
// import 'swiper/css';
// import Swiper from 'swiper';
import MovieCard from '@/components/MovieCard/MovieCard.vue'
import {  mapGetters } from 'vuex'

export default {
  name: 'PopularMovie',
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters([
      'popularMovies'
    ])
  }
}
// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });
</script>

<style>

</style>