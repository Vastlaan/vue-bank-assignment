<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="logo" aria-label="logo">
      <RouterLink to="/">
        <span>Vue</span>Bank
      </RouterLink>
    </div>
</template>

<styles scoped lang="scss">
.logo{
  a{
    font-size: 2.4rem;
    font-weight: 600;
    color: $color-text;
    text-decoration: none;

    span{
      color: $color-primary;
      font-weight: 800;
    }
  }
}
</styles>