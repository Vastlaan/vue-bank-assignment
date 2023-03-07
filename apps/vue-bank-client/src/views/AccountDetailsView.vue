<script setup lang="ts">
import OverviewHeader from '@/components/OverviewHeader.vue'
import RouterNavigation from '@/components/RouterNavigation.vue'
import AccountDetailsMain from '@/components/AccountDetailsMain.vue'
</script>

<template>
  <div>
    <OverviewHeader />
    <RouterNavigation url="/accounts" name="Go back to Accounts Overview" />
    <AccountDetailsMain />
  </div>
</template>

<style lang="scss"></style>
