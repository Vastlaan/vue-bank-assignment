<script lang="ts">
import type { Color } from '@/utils/getColorClass'
export interface TextProps {
  text: string
  color?: Color
}
</script>

<script setup lang="ts">
import getColorClass from '@/utils/getColorClass'
const props = defineProps<TextProps>()
const color = getColorClass(props.color)
</script>

<template>
  <p :class="color">{{ text }}</p>
</template>

<style scoped lang="scss">
p {
  font-size: 1.6rem;
  color: $color-text;
  max-width: 55rem;
}
@include includeColorClasses;
</style>
