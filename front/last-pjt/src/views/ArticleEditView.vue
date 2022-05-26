<template>
  <div class="container mx-auto mt-10">
    <div class="font-bold text-2xl mb-2">EDIT REGISTRATION</div>
    <article-form v-if="isArticle" :article="article" action="update">

    </article-form>
  </div>

</template>

<script>
import ArticleForm from '@/components/Community/ArticleForm.vue'
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AritcleEditView',
    components: { ArticleForm },
    computed: {
      ...mapGetters(['article', 'isArticle',])
    },
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created() {
      this.fetchArticle(this.$route.params.articlePk)
    },
  }
</script>

<style></style>
