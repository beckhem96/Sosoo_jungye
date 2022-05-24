<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/allmovies">전체 영화</router-link> |
      <router-link to="/community">커뮤니티</router-link> |
      <router-link v-if="!isLoggedIn" to="/login">로그인 |</router-link> 
      <router-link v-if="isLoggedIn" to="/logout">로그아웃</router-link>
      <router-link v-if="!isLoggedIn" to="/signup">회원 가입</router-link> |
      <router-link v-if="currentUser.username === 'admin'" to="/admin">관리자만 영화추가</router-link>
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
      'currentUser'])
  },
  methods: {
    ...mapActions([
      'fetchMovies',
      'popularMovies',
      'fetchGenres',
      'fetchActors',
      'fetchDirectors'
    ])
  },
    created() {
    this.popularMovies()
    this.fetchMovies()
    this.fetchGenres()
    this.fetchActors()
    this.fetchDirectors()
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
div {
  border-style: solid;
  border-color: black;
  margin: 5%;
}
#app {
  margin: 0%;
}
</style>
