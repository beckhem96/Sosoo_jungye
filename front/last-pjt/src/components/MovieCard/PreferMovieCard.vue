<template>
  <div class="card m-0 p-0">
    <h3>movieCard</h3>
    <!-- <p>PopularMovie요청이면 유면한 영화 출력</p>
    <p>PreferMovie요청이면 선호하는 영화 출력</p>
    <p>SimilarMovie요청이면 비슷한 영화 출력</p>
    <p>함수에 불린 값 넣어서 구분</p> -->
    <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <img class="poster" style="width: 10rem; height: 15rem;" :src="`${movie.poster_path}`" alt="">
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