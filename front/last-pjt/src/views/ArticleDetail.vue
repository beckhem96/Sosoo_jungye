<template>
<div>

  <div class="container mx-auto mt-md border-b pb-6">
    <div class="focus:outline-none font-bold text-2xl mb-2 leading-5">{{ article.title }}</div>
      <span class="focus:outline-none text-sm leading-normal pt-2">작성자 : {{ article.user.username }}</span>
    <hr class="mb-2">
    <div class="container mx-auto px-2">
      <p class="text-md font-normal tracking-wide mb-10">
        {{ article.content }}
      </p>
    </div>

    <div v-if="isAuthor">
      <div class="flex flex-wrap justify-end mb-2">
      <div class="px-6 pt-4 pb-2">
        <router-link :to="{name: 'articleEdit'}">
          <button class="btn mr-sm bg-violet900 text-violet50 text-sm font-semibold py-1.5 px-4 rounded">수정</button>
        </router-link>
        <button class="btn bg-violet900 text-violet50 text-sm font-semibold py-1.5 px-4 rounded" @click.prevent="deleteArticle(articlePk)">삭제</button>
      </div>
      </div>
    </div>

    <div class="px-4 pt-4 pb-10">
      <button v-if="!Like" @click="likeArticle(articlePk)" class="bg-violet900 hover:bg-violet700 text-violet50 font-semibold py-2 px-4 rounded">
        Like
      </button>
      <button v-if="Like" @click="likeArticle(articlePk)" class="bg-transparent hover:bg-violet50 text-violet900 font-semibold hover:text-violet700 py-2 px-4 border border-violet900 hover:border-transparent rounded">
        UnLike
      </button>
    </div>

      <!-- <router-link to="detail_id">영화 보러가기</router-link> -->
      <comment-list :article="article"></comment-list>
      <form @click.prevent="goBack">
        <button class="bg-violet900 hover:bg-violet700 text-violet50 font-semibold py-2 px-4 rounded m-lg">뒤로가기</button>
      </form>
  </div>
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
      Like: false
    }
  },
  methods: {
    ...mapActions([
      'fetchArticle',
      'deleteArticle',
      'likeArticle',
      'fetchCurrentUser'
    ]),
    isLike() {
      for (let user of this.article.like_article_users ) {
        if (user.id === this.currentUser.pk) {
          this.Like = true
        }
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.fetchArticle(this.articlePk)
    this.isLike()
  },
  computed: {
    ...mapGetters([
      'article',
      'isAuthor',
      'currentUser'
      ]),
    likeCount() {
        return this.article.like_users?.length
      }

  },
}
</script>

<style>

</style>
