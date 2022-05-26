<template>
<div>
<div class="px-6 pt-4">
  <div class="font-bold text-2xl mb-2">리뷰 작성</div>
</div>
<form @submit.prevent="onSubmit" 
  class="w-full mx-auto rounded overflow-hidden shadow-lg">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2 w-full">
      <label for="title" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        title
      </label>
      <input type="text" id="title" v-model="title" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="제목을 입력하세요">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2 w-full">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="review">
        Review
      </label>
      <input type="text" id="review" v-model="content" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="내용을 입력하세요">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="rating">
        Rating
      </label>
      <div class="relative">
        <select v-model="rating" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rating">
          <option v-for="rating in 10" :key="rating">
            {{ rating }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2">
      <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Review</button>
    </div>
  </div>
</form>
</div>

  <!-- <form @submit.prevent="onSubmit" class="review-form">
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
  </form> -->
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
