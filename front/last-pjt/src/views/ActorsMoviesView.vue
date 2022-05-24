<template>
  <div>
    <h1>{{ actors[actorPk-1].name }}의 출연 영화</h1>
    <actor-movie-card
    v-for="movie in actorMovies.actors_movies"
    :key="movie.id"
    :movie="movie"
    ></actor-movie-card>
  </div>
</template>

<script>
import ActorMovieCard from '@/components/MovieCard/ActorMovieCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { ActorMovieCard },
  name: 'ActorsMoviesView',
  data() {
    return{
      actorPk : Number(this.$route.params.actorPk),
    }
  },
  methods: {
    ...mapActions([
      'getActorMovies'
      ])
  },
  created() {
    this.getActorMovies(this.actorPk)
  },
  computed: {
    ...mapGetters([
      'actors',
      'actorMovies'
    ])
  }
}
</script>

<style>

</style>