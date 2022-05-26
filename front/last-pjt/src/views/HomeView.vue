<template>
  <div class="home">
    <h1 class="m-10 font-bold" >Home</h1>
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