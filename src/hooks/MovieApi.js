import { reactive, watch } from "vue";

const API_KEY = 'a5549d08';

export const useMovieApi = () => {
  const state = reactive({
    search: '',
    loading: true,
    movies: []
  });

  watch(() => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search;
        // Short If statment to swtich Loading div if there is no movies
        state.movies == null ?  state.loading = true :  state.loading = false;
      });
  });

  return state;
};