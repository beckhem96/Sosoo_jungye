<template>
  <div class="bg-violet200 h-screen">
    <h1 class="text-center text-7xl">Log In</h1>

    <form @submit.prevent="login(credentials)">
      <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="username" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm">username: </label>
          <input v-model="credentials.username" type="text" id="username" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
        </div>
      </div>

    <div class="flex flex-wrap mx-bigrem mb-xl">
      <div class="px-6 pt-4 pb-2 w-full">
        <label for="password" class="block uppercase tracking-wide text-xs font-bold mb-sm">password: </label>
        <input v-model="credentials.password" type="password" id="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
      </div>
    </div>

    <div class="flex flex-wrap ml-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2">
          <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Log In</button>
        </div>
      </div>
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