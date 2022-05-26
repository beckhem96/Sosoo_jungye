<template>
  <div class="my-xl py-5 rounded-lg flex justify-center mx-xl shadow-2xl bg-violet50">
    <span
    class="bg-violet900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-sm" 
    v-for="genre in genres"
    :key="genre.id">
    <router-link class="text-violet50" :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
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