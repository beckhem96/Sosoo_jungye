<template>
  <div>
    <h1>{{ directors[directorPk-1].name }}의 영화</h1>
    <director-movie-card
    v-for="movie in directorMovies.directors_movies"
    :key="movie.id"
    :movie="movie"
    ></director-movie-card>
  </div>
</template>

<script>
import DirectorMovieCard from '@/components/MovieCard/DirectorMovieCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { DirectorMovieCard },
  name: 'DirectorssMoviesView',
  data() {
    return{
      directorPk : Number(this.$route.params.directorPk),
    }
  },
  methods: {
    ...mapActions([
      'getDirectorMovies'
      ])
  },
  created() {
    this.getDirectorMovies(this.directorPk)
  },
  computed: {
    ...mapGetters([
      'directors',
      'directorMovies'
    ])
  }
}
</script>

<style>

</style>