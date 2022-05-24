<template>
  <div>
    <h1>detail</h1>
    <detail-movie 
    :moviePk="moviePk"
    :movie="movie"
    ></detail-movie>
    <similar-movie></similar-movie>
    <detail-movie-comment-list></detail-movie-comment-list>
  </div>
</template>

<script>
import DetailMovie from '@/components/DetailView/DetailMovie.vue'
import SimilarMovie from '@/components/DetailView/SimilarMovie.vue'
import DetailMovieCommentList from '@/components/DetailView/DetailMovieCommentList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DetailView',
  components: {
    DetailMovie,
    SimilarMovie,
    DetailMovieCommentList,
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