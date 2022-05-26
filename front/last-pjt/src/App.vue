<template>
  <div>
    <nav class="bg-violet700 h-10 text-center flex items-center justify-between flex-wrap p-20">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2 mb-10" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold mb-10 text-xl tracking-tight">
          <router-link class="text-white" to="/">Elite</router-link> 
        </span>
      </div>
      <div class="">
          <router-link class="block mb-10 text-white hover:text-white " to="/allmovies">전체 영화</router-link>
      </div>
      <div class="">
          <router-link class="block mb-10 text-white hover:text-white " to="/community">커뮤니티</router-link>
      </div>
      <div>    
            <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="!isLoggedIn" to="/login">로그인</router-link>     
            <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="isLoggedIn" to="/logout">로그아웃</router-link>    
            <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="!isLoggedIn" to="/signup">회원 가입</router-link>     
            <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="currentUser.username === 'admin'" to="/admin">관리자만 영화추가</router-link>    
            <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="isLoggedIn" to="/profile">{{ currentUser.username}}의 프로필</router-link> 
      </div>
      <router-view/>
    </nav>
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
