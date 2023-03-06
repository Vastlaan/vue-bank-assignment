<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/TheFooter.vue'
</script>

<template>
  <div class="mainWrapper">
    <NavigationBar />
    <RouterView class="routerView" />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.routerView {
  flex-grow: 1;
}
.mainWrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
