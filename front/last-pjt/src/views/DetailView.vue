<template>
  <div>
    <h1>detail</h1>
    <detail-movie></detail-movie>
    <similar-movie></similar-movie>
    <detail-movie-comment-list></detail-movie-comment-list>
  </div>
</template>

<script>
import DetailMovie from '@/components/DetailView/DetailMovie.vue'
import SimilarMovie from '@/components/DetailView/SimilarMovie.vue'
import DetailMovieCommentList from '@/components/DetailView/DetailMovieCommentList.vue'

export default {
  name: 'DetailView',
  components: {
    DetailMovie,
    SimilarMovie,
    DetailMovieCommentList,
  }
}
</script>

<style>

</style>