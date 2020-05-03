<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>

<script lang="ts">
export default {
  props: ['blok'],
}
</script>
