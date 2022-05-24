<template>
  <form @submit.prevent="onSubmit" class="review-form">
    <label for="title">title: </label>
    <input type="text" id="title" v-model="title" required>
    <label for="review">review: </label>
    <input type="text" id="review" v-model="content" required>
    <button>Review</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ReviewForm',
  data() {
    return {
      content: '',
      title: ''
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createReview']),
    onSubmit() {
      this.createReview({ moviePk: this.movie.id, content: this.content, title: this.title})
      this.content = '',
      this.title = ''
    }
  }
}
</script>

<style>
.comment-list-form {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>