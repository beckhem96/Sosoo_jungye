<template>
  <div>

    <movie-review-item
    v-for="review in reviews"
    :key="review.id"
    :review="review"
    ></movie-review-item>
    <review-form></review-form>
  </div>
</template>

<script>
import MovieReviewItem from './MovieReviewItem.vue'
import ReviewForm from './ReviewForm.vue'

export default {
  name: 'DetailMovieCommentList',
  components: {
    MovieReviewItem,
    ReviewForm
  },
  props: {
    reviews: Array
  }
}
</script>

<style>

</style>