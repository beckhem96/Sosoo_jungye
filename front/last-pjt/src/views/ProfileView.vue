<template>
  <div>
    <h1>프로필</h1>
    <div>
      <p>{{ profile.username }}</p>
      <div>
        <h3>작성글</h3>
        <p>{{ profile.articles }}</p>
      </div>
      <div>
        <h3>작성 리뷰</h3>
        <p
        v-for="review in profile.movie_comments"
        :key="review.id"
        >{{ review.content }}</p>        
      </div>
      <p>높은 평점을 준 영화 7이상?</p>
    </div>
    <prefer-genres v-for="r in recommendation"
    :key="r.id"
    :genre="r"
    :username="currentUser.usename"
    ></prefer-genres>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PreferGenres from '@/components/Profile/PreferGenres.vue'

export default {
  name: 'ProfileView',
  components: {
    PreferGenres,
  },
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'profile',
      'recommendation'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProfile',
      'fetchCurrentUser',
      'fetchRecommendForm'
    ])
  },
  created() { 
    this.fetchCurrentUser()
    this.fetchProfile(this.currentUser.username)
    this.fetchRecommendForm()
  }
}
</script>

<style>

</style>