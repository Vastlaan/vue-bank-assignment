<script lang="ts">
import type { ButtonAction } from '@/components/designSystem/ButtonSecondary.vue'
interface HeaderPrimaryProps {
  text: string
  buttonTitle: string
  action: ButtonAction
}
</script>

<script setup lang="ts">
import ButtonSecondary from '../designSystem/ButtonSecondary.vue'
import HeadingLarge from '../designSystem/HeadingLarge.vue'
defineProps<HeaderPrimaryProps>()
</script>

<template>
  <header>
    <HeadingLarge :text="text" color="white" />
    <ButtonSecondary :title="buttonTitle" type="button" :action="action" />
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: $color-primary;
  padding: 4.7rem 2.7rem 2.7rem 2.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include respond('s') {
    padding: 3.7rem 1.9rem 3.7rem 1.9rem;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
