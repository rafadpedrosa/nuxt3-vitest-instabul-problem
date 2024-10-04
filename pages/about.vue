<script setup lang="ts">
definePageMeta({
  middleware: 'wonderful',
  name: 'about-name',
  pageId: 'about-name-id',
  trackingLocation: 'track-about-name',
});

useHead({
  title: "ABOUT",
});

</script>

<template>
  <div>
    <h1>About In Pages</h1>
    <GetAsync />
  </div>
</template>

<style scoped>

</style>