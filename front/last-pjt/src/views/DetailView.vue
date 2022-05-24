<template>
  <div>
    <h1>detail</h1>
    <detail-movie 
    :moviePk="moviePk"
    :movie="movie"
    ></detail-movie>
    <similar-movie></similar-movie>
    <movie-review-list :reviews="movie.reviews"></movie-review-list>
  </div>
</template>

<script>
import DetailMovie from '@/components/DetailView/DetailMovie.vue'
import SimilarMovie from '@/components/DetailView/SimilarMovie.vue'
import MovieReviewList from '@/components/DetailView/MovieReviewList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DetailView',
  components: {
    DetailMovie,
    SimilarMovie,
    MovieReviewList,
  },
  data() {
    return {
      moviePk: this.$route.params.moviePk,
    }
  },
  methods: {
    ...mapActions([
      'fetchMovie',
    ])
  },
  created() {
    this.fetchMovie(this.moviePk)
  },
  computed: {
    ...mapGetters(['movie']),
  },
}
</script>

<style>

</style>