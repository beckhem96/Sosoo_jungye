<template>
<div>
  <nav class="bg-violet900 text-center flex items-center justify-between py-10 flex-wrap shadow-xl border-2">
    <div class="flex items-center ml-lg">
      <svg class="fill-current h-8 w-8 mr-sm text-violet50" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">
        <router-link class="text-violet50" to="/">Elite</router-link> 
      </span>
    </div>
    <div class="">
        <router-link class="block text-violet50" to="/allmovies">All Movies</router-link>
    </div>
    <div class="">
        <router-link class="block text-violet50" to="/community">Community</router-link>
    </div>
    <div>    
          <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-violet50 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="!isLoggedIn" to="/login">Log In</router-link>     
          <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-violet50 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="isLoggedIn" to="/logout">Log Out</router-link>    
          <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-violet50 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="!isLoggedIn" to="/signup">Sign Up</router-link>     
          <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-violet50 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="currentUser.username === 'admin'" to="/admin">Administor</router-link>    
          <router-link class="inline-block text-sm px-4 py-2 leading-none border rounded text-violet50 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" v-if="isLoggedIn" to="/profile">{{ currentUser.username}}'s Profile</router-link> 
    </div>
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
