<script lang="ts">
import type { AccountDetailsItem } from '@/types'
interface ItemProps {
  item: AccountDetailsItem
}
</script>
<script setup lang="ts">
defineProps<ItemProps>()
</script>

<template>
  <div class="item">
    <label>{{ item?.label }}: </label>
    <p>{{ item?.value }}</p>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  font-size: 1.4rem;
  margin: 0.5rem 0;

  label {
    font-size: 1.4rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
}
</style>
