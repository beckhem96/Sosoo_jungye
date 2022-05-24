<template>
  <div>
    <router-link :to="{name: 'detail', params: { moviePk: `${movie.id}` } }">
      <img :src="`${movie.poster_path}`" alt="">
      <p>{{ movie.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DirectorMovieCard',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>