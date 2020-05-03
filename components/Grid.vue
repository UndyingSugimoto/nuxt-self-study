<template>
  <div v-editable="blok" class="util__flex">
    <component
      :is="blok.component"
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script lang="ts">
export default {
  props: ['blok'],
}
</script>
