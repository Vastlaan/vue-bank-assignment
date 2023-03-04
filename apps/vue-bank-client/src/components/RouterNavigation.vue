<script lang="ts">
interface RouterNavigationProps {
  url: string
  name: string
}
</script>
<script setup lang="ts">
import LinkWithIcon from './designSystem/LinkWithIcon.vue'
defineProps<RouterNavigationProps>()
</script>

<template>
  <div class="overview">
    <LinkWithIcon :name="name" :to="url" icon="fa-chevron-left" />
  </div>
</template>

<style scoped lang="scss">
.overview {
  background-color: $color-grey-light;
  display: flex;

  & > * {
    @include navigationItemPadding;
  }
}
</style>
