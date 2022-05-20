<template>
  <div>
    <h1>movieList</h1>
    <PopularMovie/>
    <PreferMovie/>
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