<script setup lang="ts">
import { computed } from 'vue'
import HeaderPrimary from './headers/HeaderPrimary.vue'
const title = 'Enter the world of Internet Banking with ABN AMRO'
const description =
  'Did you know that you can do a lot of your banking yourself online? No need to leave your home. Log in to your accounts here.'
const action = computed(() => ({ url: '/accounts' }))
</script>

<template>
  <HeaderPrimary
    buttonTitle="Manage accounts"
    :description="description"
    :title="title"
    :action="action"
  />
</template>

<style scoped lang="scss"></style>
