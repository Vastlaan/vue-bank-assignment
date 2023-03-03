<script setup lang="ts">
import TextNormal from './TextNormal.vue'
defineProps<{ message: string }>()
</script>

<template>
  <section class="error" aria-label="error-message">
    <font-awesome-icon icon="fa-triangle-exclamation" data-testid="icon" />
    <TextNormal :text="message" color="error" />
  </section>
</template>

<style scoped lang="scss">
.error {
  @include flexColumnCenter;
  padding: 4.7rem;
  width: 100%;
  background-color: $color-bg;

  svg {
    font-size: 1.9rem;
    color: $color-error;
    margin-bottom: 1.4rem;
  }
}
</style>
