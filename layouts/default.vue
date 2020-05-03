<template>
  <div>
    <top-header />
    <main id="main" role="main">
      <nuxt />
    </main>
    <bottom-footer />
  </div>
</template>

<script lang="ts">
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
  },
}
</script>

<style lang="scss">
@use '../assets/scss/styles.scss';
</style>
