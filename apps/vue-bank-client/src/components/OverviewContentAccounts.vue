<script lang="ts">
import type { Account } from '@/types'
interface AccountsProps {
  accounts: Account[]
}
</script>

<script setup lang="ts">
import OverviewAccount from './OverviewContentAccount.vue'
defineProps<AccountsProps>()
</script>

<template>
  <ul>
    <li v-for="account of accounts" :key="account.accountNumber">
      <OverviewAccount :account="account" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
section {
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
