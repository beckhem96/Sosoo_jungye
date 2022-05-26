<template>
  <div class="bg-violet200 h-screen">
    <h1 class="text-center text-7xl">Sign Up</h1>

    <form @submit.prevent="signup(credentials)">
      <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
        <label for="username" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm">Username: </label>
        <input v-model="credentials.username" type="text" id="username" required />
        </div>
      </div>

    <div class="flex flex-wrap mx-bigrem mb-xl">
      <div class="px-6 pt-4 pb-2 w-full">
        <label for="password1" class="block uppercase tracking-wide text-xs font-bold mb-sm">Password: </label>
        <input v-model="credentials.password1" type="password" id="password1" required />
      </div>
    </div>

    <div class="flex flex-wrap ml-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2">
        <label for="password2" class="block uppercase tracking-wide text-xs font-bold mb-sm">Password Confirmation:</label>
        <input v-model="credentials.password2" type="password" id="password2" required />
        </div>
      </div>


    <div class="flex flex-wrap ml-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2">
         <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Signup</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      credentials: {
        username: '',
        password1: '',
        password2: '',
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['signup'])
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