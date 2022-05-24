<template>
  <div>
    <span>
      {{ movie.title }}
      <img :src="`${movie.poster_path}`" alt="">
      {{ movie.overview }}
    </span>
    <router-link to="detail_id">Detail</router-link>
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