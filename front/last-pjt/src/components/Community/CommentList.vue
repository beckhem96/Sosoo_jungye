<template>
  <div>
    <h1>댓글 창</h1>
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