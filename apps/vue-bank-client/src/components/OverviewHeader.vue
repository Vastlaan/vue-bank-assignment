<script setup lang="ts">
import { computed } from 'vue'
import HeaderSecondary from './designSystem/HeaderSecondary.vue'
const headerText = 'Welcome M. Antczak'
const action = computed(() => ({ url: '/contact' }))
</script>

<template>
  <HeaderSecondary :text="headerText" buttonTitle="Contact" :action="action" />
</template>

<style scoped lang="scss"></style>
