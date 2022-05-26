<template>
  <div class="">
    <div class="m-10">
      <h2 class="font-bold text-center text-violet50">인기영화</h2>
    </div>
      <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true" class="bg-violet900 blur-xs">      
        <slide         
        v-for="movie in popularMovies" 
        :key="movie.pk"
        :movie="movie"
        class="mx-auto my-auto">
        <div class="ml-10 overflow-hidden mt-6 pl-10 blur hover:blur-3xl">
          <router-link
          :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
          <img class="w-60 h-80 m-2 rounded-lg shadow-2xl" :src="`${movie.poster_path}`" alt="">
          </router-link>
        </div>
    </slide>
      </carousel>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
import { Carousel } from 'vue-carousel';

export default {
  name: 'PopularMovie',
  components: {
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