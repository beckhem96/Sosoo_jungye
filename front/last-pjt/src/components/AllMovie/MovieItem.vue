<template>
  <div class="w-100 h-60">
    <router-link
    :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <span>
      {{ movie.title }}
      <img class="poster" :src="`${movie.poster_path}`" alt="">
      {{ movie.overview }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  components: {
  },
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