<template>
  <div>
    <h3>movieCard</h3>
    <p>PopularMovie요청이면 유면한 영화 출력</p>
    <p>PreferMovie요청이면 선호하는 영화 출력</p>
    <p>SimilarMovie요청이면 비슷한 영화 출력</p>
    <p>함수에 불린 값 넣어서 구분</p>
    <router-link to="detail_id">Detail</router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
}
</script>

<style>

</style>