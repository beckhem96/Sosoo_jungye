<template>
  <div class="flex">
    <h2>인기영화</h2>
    <popular-movie-card 
      v-for="movie in popularMovies" 
      :key="movie.pk"
      :movie="movie"
    ></popular-movie-card>
  </div>
</template>

<script>
import 'swiper/css';
// import Swiper from 'swiper';
import PopularMovieCard from '@/components/MovieCard/PopularMovieCard.vue'
import {  mapGetters } from 'vuex'

export default {
  name: 'PopularMovie',
  components: {
    PopularMovieCard
  },
  computed: {
    ...mapGetters([
      'popularMovies'
    ])
  },
//   methods: {
//     const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });
  }
</script>

<style>

</style>