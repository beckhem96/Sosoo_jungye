<template>
<div
  class="flex w-full border border-violet900 hover:bg-violet400 rounded">
  <router-link
  class="flex w-full justify-items-center"
  :to="{ name: 'article', params: { articlePk: `${article.id}`} }">
  <div class="mx-auto px-6 py-3">
    {{ article.id }}
  </div>
  <div class="flex mx-auto px-6 py-4 font-medium">
    {{ article.title }}
  </div>
  <div class="flex mx-auto px-6 py-4">
    {{ article.created_at.split('T')[0] }}
  </div>
  <div class="flex mx-auto px-6 py-4">
    {{ article.like_count }}
  </div>
  </router-link>
</div>





















  <!-- <div>
    
    <p>좋아요수 {{ article.like_count }}</p>
    <router-link
      :to="{ name: 'article', params: { articlePk: `${article.id}`} }">
      <p>{{ article.title }}</p>
    </router-link>
  </div> -->
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
