<script lang="ts">
import type { Color } from '@/utils/getColorClass'
export interface HeadingProps {
  text: string
  color?: Color
}
</script>

<script setup lang="ts">
import getColorClass from '@/utils/getColorClass'
const props = defineProps<HeadingProps>()
const color = getColorClass(props.color)
</script>

<template>
  <h1 :class="color">{{ text }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-family: $font-secondary;
  font-size: 2.7rem;
  color: $color-text;
  line-height: 1.3;
}
@include includeColorClasses;
</style>
