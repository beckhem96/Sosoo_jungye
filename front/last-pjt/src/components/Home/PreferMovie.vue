<template>
  <div class="">
    <div >
      <h2>선호하는 장르의 영화</h2>
    </div>
    <div class="flex">
      <prefer-movie-card v-for="movie in preferMovies"
      :key="movie.id"
      :movie="movie"
      ><p></p></prefer-movie-card>
    </div>
  </div>
</template>

<script>
import PreferMovieCard from '@/components/MovieCard/PreferMovieCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PreferMovie',
  components: {
    PreferMovieCard
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'preferMovies'
    ])
  },
  methods: {
    ...mapActions([
      'getPreferMovies'
    ])
  },
  created() {
    this.getPreferMovies(this.currentUser.username)
  }
}
</script>

<style>

</style>