<script lang="ts">
export interface ButtonAction {
  url?: string
  callback?: (args: { [key: string]: any }) => void
}
interface ButtonSecondaryProps {
  action: ButtonAction
  type?: 'submit' | 'button'
  title: string
}
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<ButtonSecondaryProps>()
</script>

<template>
  <button v-if="!!action?.callback" :type="type">{{ props.title }}</button>
  <RouterLink v-if="!!action?.url" :to="action.url">{{ props.title }}</RouterLink>
</template>

<style scoped lang="scss">
a,
button {
  all: unset;
  @include flexColumnCenter;
  padding: 0.8rem 1.6rem;
  background-color: $color-secondary;
  color: $color-text;
  font-size: 1.6rem;
  min-width: 15rem;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: $color-secondary-dark;
  }
}
</style>
