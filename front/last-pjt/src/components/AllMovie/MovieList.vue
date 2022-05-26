<template>
  <div class="">
    <h1>MovieList</h1>
    <movie-item
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
    ></movie-item>
  </div>
</template>

<script>
import MovieItem  from './MovieItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  computed: {
    ...mapGetters([
      'movies'
    ])
  }
}
</script>

<style>

</style>