<template>
<div
  class="flex w-full border mb-md shadow-2xl border-violet900 hover:bg-violet400 rounded">
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
