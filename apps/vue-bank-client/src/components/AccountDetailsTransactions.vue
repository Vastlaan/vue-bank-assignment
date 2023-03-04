<script lang="ts">
import type { Transaction } from '@/types'
interface TransactionsProps {
  transactions: Transaction[]
}
</script>

<script setup lang="ts">
import AccountDetailsTransaction from './AccountDetailsTransaction.vue'
defineProps<TransactionsProps>()
</script>

<template>
  <section class="transactions">
    <AccountDetailsTransaction
      v-for="transaction in transactions"
      :key="transaction.transactionId"
      :transaction="transaction"
    />
  </section>
</template>

<style scoped lang="scss">
.transactions {
  @include cardStyle;
  padding: 0;
}
</style>
