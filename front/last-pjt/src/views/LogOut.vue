<template>
  <div class="">
    <h1>Bye!</h1>
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