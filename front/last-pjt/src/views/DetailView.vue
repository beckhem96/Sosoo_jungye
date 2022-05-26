<template>
  <div>
    <div class="m-xl">
      <detail-movie class="pb-6" 
      :movie="movie"
      ></detail-movie>
      <similar-movie class="pb-6"></similar-movie>
      <movie-review-list :reviews="movie.reviews" class="pb-6" ></movie-review-list>
    </div>
          <form @click.prevent="goBack">
        <button class="bg-violet900 hover:bg-violet700 text-violet50 font-semibold py-2 px-4 rounded m-lg ml-xl">뒤로가기</button>
      </form>
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
    ]),
    goBack() {
      this.$router.go(-1)
    }
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