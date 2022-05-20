<template>
  <div>
    <h1>댓글</h1>
    <detail-movie-comment-item></detail-movie-comment-item>
    <detail-movie-comment-item></detail-movie-comment-item>
    <detail-movie-comment-item></detail-movie-comment-item>
    <detail-movie-comment-item></detail-movie-comment-item>
    <detail-movie-comment-item></detail-movie-comment-item>
  </div>
</template>

<script>
import DetailMovieCommentItem from './DetailMovieCommentItem.vue'

export default {
  name: 'DetailMovieCommentList',
  components: {
    DetailMovieCommentItem,
  }
}
</script>

<style>

</style>