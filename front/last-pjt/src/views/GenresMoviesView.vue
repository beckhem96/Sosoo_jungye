<template>
  <div>
    <h1>{{ get_genre() }}</h1>
    <genre-movie-card
    v-for="movie in genreMovies.genres_movies"
    :key="movie.id"
    :movie="movie"
    ></genre-movie-card>
  </div>
</template>

<script>
import GenreMovieCard from '@/components/MovieCard/GenreMovieCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { GenreMovieCard },
  name: 'GenresMoviesView',
  data() {
    return{
      genrePk : Number(this.$route.params.genrePk),
    }
  },
  methods: {
    ...mapActions([
      'getGenreMovies'
      ]),
    get_genre() {
      for (let i in this.genres) {
        console.log(this.genres[i])
        if (this.genres[i].id === this.genrePk) {
          return this.genres[i].name
        }
      }
    }
  },
  created() {
    this.getGenreMovies(this.genrePk)
  },
  computed: {
    ...mapGetters([
      'genres',
      'genreMovies'
    ])
  }
}
</script>

<style>

</style>