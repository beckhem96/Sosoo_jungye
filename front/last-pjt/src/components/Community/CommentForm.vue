<template>
<div>
<div class="px-6 pt-4">
  <div class="font-bold text-2xl mb-2">댓글 작성</div>
</div>
<form @submit.prevent="onSubmit" 
  class="w-full mx-auto rounded overflow-hidden shadow-lg">

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2 w-full">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="comment">
        Comment
      </label>
      <input type="text" id="comment" v-model="content" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="내용을 입력하세요">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2">
      <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Comment</button>
    </div>
  </div>
</form>
</div>




<!-- 
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment">comment: </label>
    <input type="text" id="comment" v-model="content" required>
    <button>Comment</button>
  </form> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ articlePk: this.article.id, content: this.content, })
      this.content = ''
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

