<script setup lang="ts">
import OverviewHeader from '@/components/OverviewHeader.vue'
import OverviewContent from '@/components/OverviewContent.vue'
import RouterNavigation from '@/components/RouterNavigation.vue'
</script>

<template>
  <div>
    <OverviewHeader />
    <RouterNavigation url="/" name="Go back to Home" />
    <OverviewContent />
  </div>
</template>

<style lang="scss"></style>
