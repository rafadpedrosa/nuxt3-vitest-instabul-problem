<script setup lang="ts">
definePageMeta({
  middleware: ['wonderful'],
  title: "111",
  oloko: 'oloko'
});

useHead({
  title: "INDEX",
});

</script>

<template>
  <div>
    <h1>Home In Pages</h1>
    <RandomNumber />
  </div>
</template>

<style scoped>

</style>