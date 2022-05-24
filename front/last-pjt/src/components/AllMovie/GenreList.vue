<template>
  <div>
    <!-- <h1>장르 출력, 클릭하면 해당 장르의 영화 평점 순으로 출력</h1> -->
    <span v-for="genre in genres"
    :key="genre.id"
    >{{ genre.name }} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GenreList',
  computed: {
    ...mapGetters([
      'genres'
    ])
  }
}
</script>

<style>
</style>