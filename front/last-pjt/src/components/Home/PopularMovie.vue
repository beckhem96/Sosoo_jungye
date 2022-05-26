<template>
  <div class="">
    <div class="m-10">
      <h2 class="font-bold">인기영화</h2>
    </div>
      <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true">      
        <slide         
        v-for="movie in popularMovies" 
        :key="movie.pk"
        :movie="movie">
        <router-link
        :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
        <img class="w-60 h-80 m-2" :src="`${movie.poster_path}`" alt="">
        </router-link>
    </slide>
      </carousel>
    <!-- <div class="flex"> -->
      <!-- <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true">      
        <popular-movie-card 
        v-for="movie in popularMovies" 
        :key="movie.pk"
        :movie="movie">
        </popular-movie-card>
      </carousel> -->
    <!-- </div> -->

  </div>
</template>

<script>
// import PopularMovieCard from '@/components/MovieCard/PopularMovieCard.vue'
import {  mapGetters } from 'vuex'
import { Carousel } from 'vue-carousel';

export default {
  name: 'PopularMovie',
  components: {
    // PopularMovieCard,
    Carousel,
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