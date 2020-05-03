<template>
  <div v-editable="blok" class="util__flex-eq">
    <h1>{{ blok.name }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: ['blok'],
}
</script>
