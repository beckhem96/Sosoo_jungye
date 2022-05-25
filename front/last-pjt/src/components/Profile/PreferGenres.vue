<template>
  <div>
    <p>{{ genre.name }}</p>
    <p>{{ genre.id }}</p>
    <div>
      Likeit:
      <button
        @click="likeGenres(genre.id)"
      >{{ isPrefer }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PreferMovies',
  data() {
    return{
      isPrefer: false
    }
  },
  props: {
    genre: Object,
    username: String,
  },
  computed: {
    ...mapGetters([
      'recommendation'
    ]),
  },
  methods: {
    ...mapActions([
      'likeGenres'
    ])
  },
    isPrefer() {
      for (let i in this.genre.like_users.length ){
        if ( this.genre.like_users[i] === this.username ){
          this.isPrefer = true
          return this.isPrefer
        } 
      }
    }
  }
</script>

<style>

</style>