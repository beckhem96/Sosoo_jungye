<template>
  <li class="review-list-item">
    <!-- <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>:  -->
    <p> {{ review.user.username }}</p>
    <p v-if="!isEditing">{{ payload.title }}</p>
    <p v-if="!isEditing">{{ payload.content }}</p>
    <p v-if="!isEditing">평점: {{ payload.star_rating }}</p>

    <span v-if="isEditing">
      <input type="text" v-model="payload.title">
    </span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button> |
      <button @click="switchIsEditing">Cancle</button>
    </span>

    <span v-if="currentUser.username === review.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteReview(payload)">Delete</button>
    </span>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieReviewItem',
  props: {
    review: Object
  },
  data() {
    return {
      isEditing: false,
      payload: {
        moviePk: this.review.movie,
        reviewPk: this.review.id,
        content: this.review.content,
        title: this.review.title,
        star_rating : this.review.star_rating
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateReview', 'deleteReview']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateReview(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
.review-list-item {
  border: 1px solid green;

}
</style>
