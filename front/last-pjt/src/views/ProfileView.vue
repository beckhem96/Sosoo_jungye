<template>
<div class="container mx-auto mt-10">
  <div class="font-bold text-2xl mb-2">{{ profile.username }}'s Profile</div>
  <div class="mx-auto rounded overflow-hidden shadow-lg mt-6">
    <div class="px-6 pt-4 pb-2">

      <div class="font-bold text-xl mb-2">작성한 커뮤니티 글</div>
      <div class="inline-block bg-violet50 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2"
        v-for="article in profile.articles"
        :key="article.id">   
        {{ article.title }}
      </div>
      </div>

    <div class="px-6 pt-4 pb-2">
      <div class="font-bold text-xl mb-2">작성한 영화 리뷰</div>
      <div class="inline-block bg-violet50 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2"
        v-for="review in profile.movie_comments"
        :key="review.id">
        {{ review.movie.title }} : {{ review.content }}
      </div>
    </div>

    <div class="px-6 pt-4 pb-2">
      <div class="font-bold text-xl mb-2">선호하는 장르</div>
      <prefer-genres class="inline-block bg-violet50 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2"
        v-for="r in recommendation"
        :key="r.id"
        :genre="r"
        :username="currentUser.username">
        
      </prefer-genres>
    </div>
  </div>

   <!-- <prefer-genres v-for="r in recommendation"
    :key="r.id"
    :genre="r"
    :username="currentUser.usename"
    ></prefer-genres> -->
</div>

      <!-- <div>
        <h3>작성글</h3>
        <p v-for="article in profile.articles"
        :key="article.id">
        {{ article.title }}</p>
      <div>
        <h3>작성 리뷰</h3>
        <p
        v-for="review in profile.movie_comments"
        :key="review.id"
        >{{ review.content }}</p>        
      </div>
    </div> -->
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
