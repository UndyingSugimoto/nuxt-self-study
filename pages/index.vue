<template>
  <section class="util__container">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </section>
</template>

<script lang="ts">
import { Context, Response } from '@nuxt/types'
import Vue from 'Vue'

export default Vue.extend({
  asyncData(context: Context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: 'draft'
      })
      .then((res) => {
        return res.data
      })
      .catch((res: Response) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { id: '', content: {} }
    }
  },
  mounted() {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
})
</script>
