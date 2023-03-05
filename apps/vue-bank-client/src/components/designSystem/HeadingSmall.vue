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
  <h4 :class="color">{{ text }}</h4>
</template>

<style scoped lang="scss">
h4 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  font-family: $font-primary;
  color: $color-text;
  line-height: 1.3;
}
@include includeColorClasses;
</style>
