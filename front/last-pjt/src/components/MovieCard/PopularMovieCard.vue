<template>
  <div class="">
      <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <img class="w-60 h-80" :src="`${movie.poster_path}`" alt="">
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'PopularMovieCard',
  props: {
    movie: Object ,
},
}
</script>

<style>
</style>