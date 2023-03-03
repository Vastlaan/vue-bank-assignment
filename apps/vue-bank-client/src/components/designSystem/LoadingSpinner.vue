<script setup lang="ts">
import TextNormal from './TextNormal.vue'
</script>

<template>
  <div class="loading" aria-label="loading-spinner">
    <font-awesome-icon icon="fa-spinner" data-testid="icon" />
    <TextNormal text="Please wait ..." />
  </div>
</template>

<style scoped lang="scss">
.loading {
  @include flexColumnCenter;
  padding: 4.7rem;
  width: 100%;
  background-color: $color-bg;

  svg {
    animation: spin 1.2s infinite linear;
    font-size: 2.7rem;
    color: $color-primary;
    margin-bottom: 1.4rem;
  }
}
</style>
