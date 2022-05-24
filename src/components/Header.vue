<template>
  <header class="App-header">
    <h2 class="text-3xl font-bold  bg-gray-900 text-gray-200 p-4">{{ title }}</h2>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    setup() {}
  }
</script>