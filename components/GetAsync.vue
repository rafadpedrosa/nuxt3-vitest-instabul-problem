<script setup lang="ts">
const loading = ref(true);
const data = ref<string | null>('');

/**
 * TODO it is commented and not WORKING,
 * it does not make any sense.
 *
 * Remove this comment and you will see that something is really wrong.
 *
 * There might static search that finds this comment and raise the error.
 *
 * const getAsyncData = async () => {
 *   const response = await useFetch('/api/test');
 *
 *   debugger
 *   data.value = response.data.value;
 *
 *   loading.value = false;
 * };
 */

const getAsyncData = async () => {
  const response = await fetch('/api/test');

  debugger
  data.value = await response.json();

  loading.value = false;
};

getAsyncData()
</script>

<template>
  <div>
    <div v-if="loading">... Loading</div>
    <div v-else>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<style></style>