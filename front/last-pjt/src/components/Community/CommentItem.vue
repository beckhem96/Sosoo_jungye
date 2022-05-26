<template>
<div class="w-full mx-auto rounded">
    <div class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
        <div class="flex items-center border-b pb-6">
            <div class="flex items-start justify-between w-full">
                <div class="pl-3 w-full">
                  <p class="focus:outline-none text-sm leading-normal pt-2">작성자 : {{ comment.user.username }}</p>
                  <p class="focus:outline-none text-sm leading-normal pt-2">작성날짜 : {{ comment.created_at.split('T')[0]}}</p>
                  <p v-if="comment.created_at != comment.updated_at" class="focus:outline-none text-sm leading-normal pt-2">수정날짜 : {{ comment.updated_at.split('T')[0]}}</p>
                </div>
            </div>
        </div>
        <div class="px-2">
            <p v-if="!isEditing" class="focus:outline-none text-sm leading-5 py-4">{{ payload.content }}</p>
            <span v-if="isEditing">
              <input class="focus:outline-none text-sm leading-5 py-4" type="text" v-model="payload.content">
              <div class="focus:outline-none flex">
                <button @click="onUpdate" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded mr-1">Update</button>
                <button @click="switchIsEditing" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Cancle</button>
              </div>
            </span>
            <span v-if="currentUser.username === comment.user.username && !isEditing"
              class="focus:outline-none flex">
              <button @click="switchIsEditing" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded mr-1">Edit</button>
              <button @click="deleteComment(payload)" class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Delete</button>
            </span>
        </div>
    </div>
</div>












  <!-- <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    <p> {{ comment.user.username }}</p>
    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button> |
      <button @click="switchIsEditing">Cancle</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteComment(payload)">Delete</button>
    </span>
  </li> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.id,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
.comment-list-item {
  border: 1px solid green;

}
</style>
