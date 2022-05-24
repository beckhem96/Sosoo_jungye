<template>
  <div>
    <h1>새로운 글쓰기</h1>
    <article-form :article="article" action='create'></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/Community/ArticleForm.vue'

  export default {
    name: 'AritcleNewView',
    components: {
      ArticleForm
    },
    data() {
      return {
        article: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
  }
</script>

<style></style>
