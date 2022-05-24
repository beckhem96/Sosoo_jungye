<template>
  <div>
    <h1>Detail</h1>
    <div>
      <img :src="`${movie.poster_path}`" alt="">
    </div>
    <div>
      <h3>장르</h3>
      <p v-for="genre in movie.genres"
      :key="genre.id"
      >{{ genre.name }}</p>
    </div>
    <div>
      <h3>출연</h3>
      <p v-for="actor in movie.actors"
      :key="actor.id"
      >{{ actor.name }}</p>
    </div>
    <div>
      <h3>감독</h3>
      <p v-for="director in movie.directors"
      :key="director.id"
      >{{ director.name }}</p>
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