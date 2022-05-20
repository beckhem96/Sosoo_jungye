<template>
  <div>
    <h1>일단 전체 영화 데이터 출력</h1>
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
    GenreList
}
}
</script>

<style>
</style>