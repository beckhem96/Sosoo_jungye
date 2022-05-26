<template>
  <!-- <div class="w-full">
    <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
      <div class="flex-1">
        <img class="w-60 h-80" :src="`${movie.poster_path}`" alt="">
      </div>
      <div class="flex-1 ">
        {{ movie.title }}
      </div>
      <div class="flex-1 ">
        {{ movie.overview }}
      </div>
    </router-link>
  </div> -->
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <router-link
      :to="{ name: 'detail', params: { moviePk: `${movie.id}`} }">
        <img class="w-60 h-80" :src="`${movie.poster_path}`" alt="">
      </router-link>
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ movie.title }}</div>
          <p class="text-gray-700 text-base">{{ movie.overview }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  components: {
  },
  props: {
    movie: Object
  }
}
</script>

<style>
.poster {
  width: 30rem;
  height: 50rem;
}
</style>