<template>
  <div class="home pt-5 bg-violet400">
    <h1 class="m-10 font-bold text-center text-violet50" >Home</h1>
    <HomeMovieList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMovieList from '@/components/Home/HomeMovieList'

export default {
  name: 'HomeView',
  components: {
    HomeMovieList
  }
}
</script>
<style>

</style>