<template>
  <div class="container mx-auto mt-10">
    <div class="font-bold text-2xl mb-2">POST REGISTRATION</div>
    <article-form class="mt-5"
    :article="article" action='create'></article-form>
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
