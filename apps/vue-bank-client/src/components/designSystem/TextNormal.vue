<script lang="ts">
import type { Color } from '@/utils/getColorClass'
import { computed } from 'vue'
import getColorClass from '@/utils/getColorClass'
export interface TextProps {
  text: string
  color?: Color
  isBold?: boolean
}
</script>

<script setup lang="ts">
const props = defineProps<TextProps>()
const displayColor = computed(() => getColorClass(props.color))
const bold = computed(() => {
  return props.isBold ? 'bold' : ''
})
</script>

<template>
  <p :class="[displayColor.value, bold]">{{ text }}</p>
</template>

<style scoped lang="scss">
p {
  font-family: $font-primary;
  font-size: 1.6rem;
  color: $color-text;
  max-width: 55rem;
}
.bold {
  font-weight: 500;
}
@include includeColorClasses;
</style>
