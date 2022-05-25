<template>
  <div class="card m-0 p-0">
    <h3>movieCard</h3>
    <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <img class="poster" style="width: 10rem; height: 15rem;" :src="`${movie.poster_path}`" alt="">
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