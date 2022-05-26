<template>
  <div>
    <div class="container mx-xl">
      <detail-movie class="pb-6" 
      :moviePk="moviePk"
      :movie="movie"
      ></detail-movie>
      <similar-movie class="pb-6"></similar-movie>
      <movie-review-list :reviews="movie.reviews" class="pb-6" ></movie-review-list>
    </div>
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