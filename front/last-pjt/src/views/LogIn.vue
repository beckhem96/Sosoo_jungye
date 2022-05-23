<template>
  <div>
    <h1>Log In</h1>

    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">username: </label>
        <input v-model="credentials.username" type="text" id="username" required />
      </div>

      <div>
        <label for="password">password: </label>
        <input v-model="credentials.password" type="password" id="password" required />
      </div>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  naem: "LogIn",
  data() {
  return {
    credentials: {
      username: '',
      password: '',
    },
  }
},
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  created() {
    if(this.isLoggedIn){
      alert('잘 못된 접근')
      this.$router.back()
    }
  }

}
</script>

<style>

</style>