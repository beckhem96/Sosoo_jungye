<template>
  <div class="my-10 py-5 rounded-lg flex justify-center mx-20 bg-violet200">
    <span
    class="bg-violet50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1" 
    v-for="genre in genres"
    :key="genre.id">
    <router-link :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
    {{ genre.name }}
    </router-link></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GenreList',
  computed: {
    ...mapGetters([
      'genres'
    ])
  }
}
</script>

<style>
</style>