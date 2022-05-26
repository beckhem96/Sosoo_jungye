<template>
  <div class="text-center h-screen text-realbig bg-violet400 text-violet50">
    <h1>Bye!</h1>
    <h5 class="mt-20">See you again!</h5>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "LogOut",
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  created() {
    if(this.isLoggedIn){
      this.logout()
    } else{
      alert('잘 못된 접근')
      this.$router.back()
    }
  }
}
</script>

<style>

</style>