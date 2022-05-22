<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/allmovies">전체 영화</router-link> |
      <router-link to="/community">커뮤니티</router-link> |
      <router-link to="/login">로그인 - 로그인 안 됐을 떄</router-link> |
      <router-link to="/logout">로그아웃 - 로그인 됐을 떄</router-link> |
      <router-link to="/signup">회원 가입 - 로그인 안 됐을 때</router-link> |
      <router-link to="/admin">관리자만 영화추가</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

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
