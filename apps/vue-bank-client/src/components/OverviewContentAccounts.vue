<script lang="ts">
import type { Account } from '@/types'
import OverviewAccount from './OverviewContentAccount.vue'
interface AccountsProps {
  accounts: Account[]
}
</script>

<script setup lang="ts">
defineProps<AccountsProps>()
</script>

<template>
  <ul class="accountGroupsList">
    <li v-for="account of accounts" :key="account.accountNumber">
      <OverviewAccount :account="account" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.accountGroupsList {
  list-style: none;
  padding: 0;
}
</style>
