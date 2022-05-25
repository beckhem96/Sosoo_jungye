<template>
  <div class="">
      <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <img class="poster" :src="`${movie.poster_path}`" alt="">
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