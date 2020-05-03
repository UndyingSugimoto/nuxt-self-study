<template>
  <div v-editable="blok" class="page">
    <component
      :is="blok.component"
      v-for="blok in blok.body"
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
