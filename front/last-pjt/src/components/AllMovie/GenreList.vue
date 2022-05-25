<template>
  <div>
    <span
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