<template>
  <div>
    <router-link
    :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <span>
      {{ movie.title }}
      <img :src="`${movie.poster_path}`" alt="">
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

</style>