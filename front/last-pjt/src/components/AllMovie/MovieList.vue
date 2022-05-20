<template>
  <div>
    <h1>MovieItem들 출력할 frame</h1>
    <movie-item></movie-item>
  </div>
</template>

<script>
import MovieItem  from './MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieItem
  }
}
</script>

<style>

</style>