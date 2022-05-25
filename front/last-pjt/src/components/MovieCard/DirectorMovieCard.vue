<template>
  <div>
    <router-link :to="{name: 'detail', params: { moviePk: `${movie.id}` } }">
      <img class="poster" :src="`${movie.poster_path}`" alt="">
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
.poster {
  width: 30rem;
  height: 50rem;
}
</style>