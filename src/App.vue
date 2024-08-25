<template>
  <div class="app">
    <default class="header">
      <span class="logo">PokePuncher</span>
    </default>
    <RouterView to="/">Main</RouterView>
    <RouterLink to="/arena">Arena</RouterLink>
  </div>
</template>

<script setup>
import TheIndex from '/src/components/pages/index.vue'
import Arena from '@/components/pages/arena.vue'
import Default from '@/components/layouts/default.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: TheIndex },
  { path: '/arena', component: Arena }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: 100px;
    background-color: burlywood;
    display: flex;
    align-items: center;

    .logo {
      font-size: 32px;
      font-weight: 600;
      padding-left: 20px;
    }
  }
}
</style>
