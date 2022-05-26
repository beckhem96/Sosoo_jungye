<template>
    <slide>
        <router-link
        :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
        <img class="w-60 h-80" :src="`${movie.poster_path}`" alt="">
        </router-link>
    </slide>
</template>

<script>
import { Slide } from 'vue-carousel';

export default {
  name: 'PopularMovieCard',
  components: {
      Slide
  },
  props: {
    movie: Object ,
},
}
</script>

<style>
</style>