<template>
  <div>
    
    <p>좋아요수 {{ article.like_count }}</p>
    <router-link
      :to="{ name: 'article', params: { articlePk: `${article.id}`} }">
      <p>{{ article.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object
  }
}
</script>

<style>

</style>