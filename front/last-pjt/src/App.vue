<template>
  <div id="app" class="bg-violet400">
    <nav class="bg-violet400 h-10 text-center">
      <router-link class="text-black" to="/">Home |</router-link> 
      <router-link class="text-black" to="/allmovies">전체 영화 |</router-link> 
      <router-link class="text-black" to="/community">커뮤니티 |</router-link>
      <router-link class="text-black" v-if="!isLoggedIn" to="/login">로그인 |</router-link> 
      <router-link class="text-black" v-if="isLoggedIn" to="/logout">로그아웃 |</router-link> 
      <router-link class="text-black" v-if="!isLoggedIn" to="/signup">회원 가입 |</router-link> 
      <router-link class="text-black" v-if="currentUser.username === 'admin'" to="/admin">관리자만 영화추가 |</router-link>
      <router-link class="text-black" v-if="isLoggedIn" to="/profile">{{ currentUser.username}}의 프로필 |</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([ 
      'isLoggedIn',
      'currentUser'
      ]),
  },
  methods: {
    ...mapActions([
      'fetchMovies',
      'popularMovies',
      'fetchGenres',
      'fetchActors',
      'fetchDirectors',
      'fetchCurrentUser',
    ]),
    // test(){
    //   console.log(localStorage.clear())
    // }
  },
    created() {
    this.popularMovies()
    this.fetchMovies()
    this.fetchGenres()
    this.fetchActors()
    this.fetchDirectors()
    this.fetchCurrentUser()
    // this.test()
  },
}
</script>


<style>
</style>
