<template>
  <div class="m-2">
    <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <img class="w-60 h-80" style="width: 10rem; height: 15rem;" :src="`${movie.poster_path}`" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PreferMovieCard',
  props: {
    movie: Object ,
},
}
</script>

<style>

</style>