<template>
  <div class="">
    <div class="m-10">
      <h2 class="font-bold text-center text-violet50">선호하는 장르의 영화</h2>
    </div>
    <carousel :per-page="5" :navigate-to="someLocalProperty" :mouse-drag="true" class="bg-violet50">      
      <slide         
        v-for="movie in preferMovies" 
        :key="movie.pk"
        :movie="movie"
        class="mx-auto my-auto">
        <div class="ml-10 overflow-hidden mt-6 pl-10">
          <router-link
          :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
          <img class="w-60 h-80 m-2 rounded-lg shadow-2xl " :src="`${movie.poster_path}`" alt="">
          </router-link>
        </div>
      </slide>
    </carousel>
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