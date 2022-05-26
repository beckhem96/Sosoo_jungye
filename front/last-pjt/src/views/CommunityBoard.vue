<template>
  <div class="container mx-auto mt-md">
    <div class="m-md font-bold text-center text-2xl text-violet50">COMMUNITY</div>
		<div class="p-4">
			<table class="w-full text-sm text-left">
					<div class="flex">

						<div class="flex mx-auto px-6 py-3 text-violet50">
                ID
						</div>
						<div class="flex mx-auto px-6 py-3 text-violet50">
							Title
						</div>
						<div class="flex mx-auto px-6 py-3 text-violet50">
							Created date
						</div>
						<div class="flex mx-auto px-6 py-3 text-violet50">
              <!-- <font-awesome-icon icon="fa-solid fa-heart" /> -->
              좋아요
						</div>

					</div>
      <article-item
      v-for="article in articles"
      :key="article.id"
      :article="article"
      ></article-item>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="px-6 pt-4 pb-2">
          <router-link :to="{ name: 'articleNew'}">
          <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">글쓰기</button>
          </router-link>
        </div>
      </div>
      </table>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Community/ArticleItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
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
