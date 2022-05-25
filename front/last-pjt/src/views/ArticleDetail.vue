<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>작성자 : {{ article.user.username }}</p>
    <div>
      <p>{{ article.content }}</p>
    </div>
    <div v-if="isAuthor">
      <router-link :to="{name: 'articleEdit'}">
        <button>수정</button>
      </router-link>
      <button @click.prevent="deleteArticle(articlePk)">삭제</button>
    </div>
    <div>
      Likeit:
      <button
        @click="likeArticle(articlePk)"
      >{{ likeCount }}</button>
    </div>

    <router-link to="detail_id">영화 보러가기</router-link>
    <comment-list :article="article"></comment-list> 
  </div>
</template>

<script>
import CommentList from '@/components/Community/CommentList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ArticleDetail',
  components: {
    CommentList,
  },
  data() {
    return {
      articlePk: this.$route.params.articlePk,
    }
  },
  methods: {
    ...mapActions([
      'fetchArticle',
      'deleteArticle',
      'likeArticle',
    ])
  },
  created() {
    this.fetchArticle(this.articlePk)
  },
  computed: {
    ...mapGetters([
      'article',
      'isAuthor'
      ]),
    likeCount() {
        return this.article.like_users?.length
      }

  },
}
</script>

<style>

</style>