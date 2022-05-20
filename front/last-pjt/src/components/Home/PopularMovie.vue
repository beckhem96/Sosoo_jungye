<template>
  <div>
    <h2>인기영화</h2>
    <MovieCard/>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue'

export default {
  name: 'PopularMovie',
  components: {
    MovieCard
  }
}
</script>

<style>

</style>