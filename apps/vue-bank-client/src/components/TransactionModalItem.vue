<script lang="ts">
interface TransactionItem {
  label: string
  text: string
}
</script>

<script setup lang="ts">
defineProps<TransactionItem>()
</script>

<template>
  <div class="item">
    <h4>{{ label }}</h4>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.item {
  padding: 1.9rem 0;
  border-bottom: 1px solid $color-grey-light;

  h4 {
    margin-bottom: 0.6rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: $color-primary-dark;
  }
  p {
    font-size: 1.4rem;
  }
}
</style>
