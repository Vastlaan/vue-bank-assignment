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
  <h3 :class="color">{{ text }}</h3>
</template>

<style scoped lang="scss">
h3 {
  font-family: $font-primary;
  font-size: 1.9rem;
  color: $color-text;
  line-height: 1.6;
  font-weight: 600;

  @include respond('s') {
    text-align: center;
  }
}
@include includeColorClasses;
</style>
