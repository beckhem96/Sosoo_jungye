<template>
  <div>
    <p>{{ genre.name }}</p>
    <div>
      <form      
        @click="onPrefer">
        <button>Prefer</button>
        <h1>{{ isPrefer }}</h1>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PreferMovies',
  data() {
    return{
      isPrefer: false,
      preferList: {
        14 : false,
        16 : false,
        18 : false,
        27 : false,
        28 : false,
        35 : false,
        10749 : false,
      }
    }
  },
  props: {
    genre: Object,
    username: String,
  },
  computed: {
    ...mapGetters([
      'recommendation',
      'currentUser'
    ]),
  },
  methods: {
    ...mapActions([
      'likeGenres',
      'fetchCurrentUser'
    ]),
    isPreferFuction() {
      for (let i in this.recommendation.length) {
        console.log(i)
        for(let user of this.recommendation[i].like_users ){
          if (user.pk === this.currentUser.pk) {
            let j = this.recommendation[i].id
            this.preferList[j] = true
          }
        }
      }
    }
  },
  created() {
    this.isPreferFuction()
  }
}


</script>

<style>

</style>
