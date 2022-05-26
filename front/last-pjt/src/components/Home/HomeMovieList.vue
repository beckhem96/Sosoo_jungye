<template>
  <div>
    <h1>movieList</h1>
    <popular-movie class=""></popular-movie>
    <prefer-movie></prefer-movie>
  </div>
</template>

<script>
import PopularMovie from '@/components/Home/PopularMovie.vue'
import PreferMovie from '@/components/Home/PreferMovie.vue'


export default {
  name: 'HomeMovieList',
  components: {
    PopularMovie,
    PreferMovie
  }
}
</script>

<style>

</style>