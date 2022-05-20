<template>
  <div>
    <h2>선호 영화</h2>
    <MovieCard/>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue'

export default {
  name: 'PreferMovie',
  components: {
    MovieCard
  }
}
</script>

<style>

</style>