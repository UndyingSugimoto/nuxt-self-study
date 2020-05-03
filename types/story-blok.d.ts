import Vue from 'Vue'
import { NuxtAppOptions } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $storybridge: StoryBridge
  }
  type StoryBridge = {
    doLoadScript: boolean
    proxy: string
    on: (events: String[], cb: CallBack, options?: any) => any
    load: (cb: Function, errorCb: Function) => void
  }
  type CallBack = (event: Event) => void
  type Options = {
    accessToken?: string
    customParent?: string
  }
  type Event = {
    action: string
    story: {
      id: string
      content: {}
    }
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $storyapi: StoryAPI
  }
  interface StoryAPI {
    get: (path: string, setting: any) => Promise<Response>
  }
  export interface Response {
    data: {}
    response: {
      data: string
      status: number
    }
  }
}

declare module 'vue-router/types/router' {
  interface VueRouter {
    go(param: GoParam): void
  }
  type GoParam = {
    path: Route
    force: boolean
  }
}
