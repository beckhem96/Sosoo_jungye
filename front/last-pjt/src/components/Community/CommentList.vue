<template>
<div class="container mx-auto mt-10">
  <div class="font-bold text-2xl mb-2">COMMENT</div>
    <comment-item     
    v-for="comment in article.comments"
    :key="comment.id"
    :comment="comment"
    ></comment-item>
  <div>
    <comment-form></comment-form>
  </div>
</div>
</template>

<script>
import CommentItem from './CommentItem.vue'
import CommentForm from './CommentForm.vue'

export default {
  name: "CommentList",
  components: {
    CommentItem,
    CommentForm,
  },
  props: {
    article: Object
  }
}
</script>

<style>

</style>
