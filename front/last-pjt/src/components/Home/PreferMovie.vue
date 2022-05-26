<template>
  <div class="mb-xl">
    <div class="m-xl">
      <h2 class="font-bold text-xl text-violet50">Recommendation</h2>
    </div>
    <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true" class="bg-violet900 shadow-4xl">      
      <slide         
        v-for="movie in preferMovies" 
        :key="movie.pk"
        :movie="movie"
        class="mx-sm my-md">
        <div class="ml-md overflow-hidden mt-sm pl-10">
          <router-link
          :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
          <img class="w-60 h-80 m-sm rounded-lg shadow-2xl " :src="`${movie.poster_path}`" alt="">
          </router-link>
        </div>
      </slide>
    </carousel>
    <div class="py-20"></div>
  </div>
</template>

<script>
import { Carousel } from 'vue-carousel';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PreferMovie',
  components: {
    Carousel,
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'preferMovies'
    ])
  },
  methods: {
    ...mapActions([
      'getPreferMovies'
    ])
  },
  created() {
    this.getPreferMovies(this.currentUser.username)
  }
}
</script>

<style>

</style>