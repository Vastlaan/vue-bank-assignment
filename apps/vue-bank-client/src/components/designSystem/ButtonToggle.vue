<script lang="ts">
export interface ButtonToggleProps {
  action: (args: { [key: string]: any }) => void
  title: string
  icon?: string
}
</script>

<script setup lang="ts">
const props = defineProps<ButtonToggleProps>()
</script>

<template>
  <button @click.stop="action" type="button">
    <font-awesome-icon v-if="!!icon" :icon="icon" data-testid="icon" />
    {{ props.title }}
  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  padding: 0.3rem 0;
  background-color: transparent;
  color: $color-text;
  font-size: 1.2rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  :focus {
    color: $color-primary;
    background-color: transparent;
  }

  svg {
    margin-right: 0.8rem;
  }
}
</style>
