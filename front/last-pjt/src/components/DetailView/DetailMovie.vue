<template>
  <div>
    <h1>Detail</h1>
    <div>
      <img :src="`${movie.poster_path}`" alt="">
    </div>
    <div>
      <h3>장르</h3>
      <p 
      v-for="genre in movie.genres"
      :key="genre.id">
      <router-link :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
      {{ genre.name }}
      </router-link></p>
    </div>
    <div>
      <h3>출연</h3>
      <p v-for="actor in movie.actors"
      :key="actor.id">
      <router-link :to="{name:'actorsMovies', params: {actorPk: `${actor.id}`} }">      
      {{ actor.name }}
      </router-link></p>
    </div>
    <div>
      <h3>감독</h3>
      <p v-for="director in movie.directors"
      :key="director.id">
      <router-link :to="{name:'directorsMovies', params: {directorPk: `${director.id}`} }">      
      {{ director.name }}
      </router-link></p>
    </div>
    <div>platforms Link</div>
    <div>Overview</div>
  </div>
</template>

<script>
export default {
  name: 'DetailMovie',
  props: {
    moviePk: String,
    movie: Object
  },
}

</script>

<style>

</style>