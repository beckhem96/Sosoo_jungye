<template>
    <div>
      <h1>커뮤니티</h1>
      <article-item
      v-for="article in articles"
      :key="article.id"
      :article="article"
      ></article-item>
      <button>글쓰기</button>
    </div>
</template>

<script>
import ArticleItem from '@/components/Community/ArticleItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  computed: {
    ...mapGetters([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'fetchArticles',
    ])
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<style>

</style>