<script lang="ts">
export interface LinkWithIconProps{
  to: string;
  name: string;
  icon?: string;
  applyActiveClass?:boolean;
  hideTextWhenShrink?: boolean;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps<LinkWithIconProps>()
const shallApplyActiveClass = computed(()=> !!props.applyActiveClass)
</script>

<template>
  <RouterLink :to="to" class="link" :activeClass="shallApplyActiveClass? 'active' : undefined">
    <font-awesome-icon v-if="!!icon" :icon="icon" data-testid="icon"/>
    <span :class="!!hideTextWhenShrink?'shrink':undefined">{{ name }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.link{
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: none;
  color: $color-text;
  transition: all .2s;

  &:hover{
    color: $color-primary;
  }

  svg{
    margin-right: .6rem;
  }
}
.shrink{
  @include respond('s'){
    display: none;
  }
}
.active{
  background-color: $color-primary;
  color: $color-bg;

  &:hover{
    color: $color-bg;
    background-color: $color-primary-dark;
  }
}
</style>