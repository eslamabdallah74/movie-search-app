<template>
  <form class="my-8 text-center search">
    <input
        class="p-2 mx-2 border-2 rounded-lg border-slate-800"
        placeholder="Type Movie Name"
        type="text"
        :value="movieTitle"
        @keyup="handleChange"
    />
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';

  export default {
    name: 'Search',
    props: ['search'],
    setup({ search }, { emit }) {
      const movieTitle = ref(search);

      return {
        movieTitle,
        handleChange(event) {
          movieTitle.value = event.target.value
          emit('search', movieTitle.value);  
        }
      }
    }
  };
</script>