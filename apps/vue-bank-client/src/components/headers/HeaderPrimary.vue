<script lang="ts">
import type { ButtonAction } from '@/components/designSystem/ButtonSecondary.vue'
export interface HeaderPrimaryProps {
  description: string
  title: string
  action: ButtonAction
  buttonTitle: string
}
</script>

<script setup lang="ts">
import ButtonSecondary from '../designSystem/ButtonSecondary.vue'
import HeadingLarge from '../designSystem/HeadingLarge.vue'
import TextNormal from '../designSystem/TextNormal.vue'
defineProps<HeaderPrimaryProps>()
</script>

<template>
  <header>
    <div class="main">
      <HeadingLarge :text="title" color="white" />
      <TextNormal color="white" :text="description" />
    </div>
    <ButtonSecondary :title="buttonTitle" type="button" :action="action" />
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4.7rem 2.7rem 2.7rem 2.7rem;
  background-color: $color-primary;

  @include respond('s') {
    padding: 3.7rem 1.9rem 3.7rem 1.9rem;
    flex-direction: column;
  }
}
.main {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.7rem;

  & > h1 {
    margin-bottom: 1.2rem;
  }
}
</style>
