<template>
  <div>
    <h1>댓글 창</h1>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue'

export default {
  name: "CommentList",
  components: {
    CommentItem
  }
}
</script>

<style>

</style>