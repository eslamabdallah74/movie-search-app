<template>
  <div class="App">
    <Header :title="'Movie Search App'" />
    <Search :search="state.search" @search="handleSearch" />
    <div class="grid" v-if="state.loading">  
        <span class="p-4 mx-auto text-2xl text-center text-gray-100 bg-gray-900 rounded-md">
        Loading...<i class="fa-solid fa-spinner animate-spin"></i>
        </span>
     </div>
    <div class="grid grid-cols-4 gap-4 mx-10 movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
  import Header       from './components/Header.vue';
  import Search       from './components/Search.vue';
  import Movie        from './components/Movie.vue';
  import { useMovieApi }  from './hooks/MovieApi'

  export default {
    name: 'app',
    components: {
      Header, Search, Movie
    },
    setup() {
      const state = useMovieApi();
      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
    };
  }
}
</script>