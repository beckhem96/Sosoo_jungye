<template>
  <div class="">
    <div class="m-xl">
      <h2 class="font-bold text-xl text-violet50">Popular</h2>
    </div>
      <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true" class="bg-violet900 blur-xs shadow-3xl">      
        <slide         
        v-for="movie in popularMovies" 
        :key="movie.pk"
        :movie="movie"
        class="mx-sm my-md">
        <div class="ml-md overflow-hidden mt-sm pl-10">
          <router-link
          :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
          <img class="w-60 h-80 m-sm rounded-lg shadow-2xl hover:scale-110" :src="`${movie.poster_path}`" alt="">
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
  }
</script>

<style>

</style>