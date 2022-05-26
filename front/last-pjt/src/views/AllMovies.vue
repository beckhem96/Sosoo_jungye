<template>
  <div class="">
    <genre-list></genre-list>
    <movie-list></movie-list>
  </div>
</template>

<script>
import MovieList from '@/components/AllMovie/MovieList.vue'
import GenreList from '../components/AllMovie/GenreList.vue'

export default {
  name: 'AllMovies',
  components: {
    MovieList,
    GenreList,
}
}
</script>

<style>
</style>