<script setup lang="ts">
import { computed } from 'vue'
import HeaderPrimary from './designSystem/HeaderPrimary.vue'
const title = 'Manage your account preferences'
const description = 'Check out your saldo. Log in to your accounts here.'
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
