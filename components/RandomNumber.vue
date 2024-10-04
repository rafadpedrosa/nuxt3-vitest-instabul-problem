<script setup lang="ts">
/**
 * TODO it is commented and not WORKING,
 * it does not make any sense.
 *
 * Remove this comment and you will see that something is really wrong.
 *
 * There might static search that finds this comment and raise the error.
 *
 * const num = useState<number>('random', () => -1)
 */

const num = ref(-1)

const test = ref(0)

const refreshNum = () => {
  num.value = Math.random()
  test.value = num.value
}
</script>

<template>
  <div>
    <p>Number: <span>{{ num }}</span></p>
    <button data-ev-label="test" @click="refreshNum">Refresh</button>
  </div>
</template>

<style></style>