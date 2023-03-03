<script setup lang="ts">
import AppLogo from '@/components/designSystem/AppLogo.vue';
import NavigationLinks from './NavigationLinks.vue';
</script>

<template>
  <nav>
    <AppLogo />
    <NavigationLinks />
  </nav>
</template>

<style scoped lang="scss">
  nav{
    width: 100%;
    background-color: $color-bg;
    box-shadow: 0 .3rem .3rem rgba(242,247,247,.8);
    display: flex;

    & > *:first-of-type{
      @include navigationItemPadding;
    }
  }
</style>