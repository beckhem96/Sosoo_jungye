<template>
<div class="w-full mx-auto rounded bg-violet50">
    <div   aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
        <div class="flex items-center border-b border-gray-200 pb-6">
            <div class="flex items-start justify-between w-full">
                <div class="pl-3 w-full">
                    <p v-if="!isEditing"   class="focus:outline-none text-xl font-medium leading-5 text-gray-800">{{ payload.title }}</p>
                    <span v-if="isEditing">
                      <input   class="focus:outline-none text-xl font-medium leading-5 text-gray-800" type="text" v-model="payload.title">
                    </span>
                    <p   class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">작성자 : {{ review.user.username }}</p>
                </div>
            </div>
        </div>
        <div class="px-2">
            <p v-if="!isEditing"   class="focus:outline-none text-sm leading-5 py-4 text-gray-600">{{ payload.content }}</p>
            <span v-if="isEditing">
              <input   class="focus:outline-none text-sm leading-5 py-4 text-gray-600" type="text" v-model="payload.content">
              <div   class="focus:outline-none flex">
                <button @click="onUpdate" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded mr-1">Update</button>
                <button @click="switchIsEditing" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Cancle</button>
              </div>
            </span>
            <span v-if="currentUser.username === review.user.username && !isEditing"
              class="focus:outline-none flex">
              <button @click="switchIsEditing" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded mr-1">Edit</button>
              <button @click="deleteReview(payload)" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Delete</button>
            </span>
        </div>
    </div>
</div>






    <!-- <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>:  -->
  <!-- <li class="review-list-item">
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
  </li> -->

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
