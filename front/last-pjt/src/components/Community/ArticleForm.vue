<template>
<div>
<form @submit.prevent="onSubmit"
  class="w-full">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="title">
        title
      </label>
      <input v-model="newArticle.title" class="appearance-none block w-full border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" placeholder="제목을 입력해주세요">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="content">
        Content
      </label>
      <textarea v-model="newArticle.content" class="appearance-none block w-full border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="content" type="text" placeholder="내용을 입력해주세요"></textarea>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="px-6 pt-4 pb-2">
      <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">{{action}}</button>
    </div>
  </div>
</form>
</div>
  <!-- <div>
    <h1>글 써져라</h1>
    <p>{{ article.title }}</p>
    <p>{{ action }}</p>
    <form @submit.prevent="onSubmit">
    <div>
      <label for="title">title: </label>
      <input v-model="newArticle.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">contnet: </label>
      <textarea v-model="newArticle.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
  </div> -->
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
    props: {
      article: Object,
      action: String,
    },
    data() {
      return {
        newArticle: {
          title: this.article.title,
          content: this.article.content,
        }
      }
    },

    methods: {
      ...mapActions(['createArticle', 'updateArticle']),
      onSubmit() {
        if (this.action === 'create') {
          this.createArticle(this.newArticle)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.article.id,
            ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
    },
  }
</script>

<style></style>
