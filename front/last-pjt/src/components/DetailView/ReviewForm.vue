<template>
  <form @submit.prevent="onSubmit" class="review-form">
    <label for="title">title: </label>
    <input type="text" id="title" v-model="title" required>
    <label for="review">review: </label>
    <input type="text" id="review" v-model="content" required>
    <select v-model="rating">
      <option v-for="rating in 10" :key="rating">
      {{ rating }}
      </option>
    </select>
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
      title: '',
      rating: 10,
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createReview']),
    onSubmit() {
      console.log(this.rating)
      this.createReview({ moviePk: this.movie.id, content: this.content, title: this.title, star_rating: this.rating})
      this.content = '',
      this.title = ''
      this.rating = 10
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