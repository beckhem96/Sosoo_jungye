<template>
    <div class="container mx-auto mt-10">
    <div class="font-bold text-2xl mb-2">COMMUNITY</div>
      <article-item
      v-for="article in articles"
      :key="article.id"
      :article="article"
      ></article-item>
      <router-link :to="{ name: 'articleNew'}">
        <button>글쓰기</button>
      </router-link>
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
