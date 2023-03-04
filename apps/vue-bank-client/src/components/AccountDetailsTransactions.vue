<script lang="ts">
import type { Transaction } from '@/types'
import AccountDetailsTransaction from './AccountDetailsTransaction.vue'
interface TransactionsProps {
  transactions: Transaction[]
  currencyCode: string
}
</script>

<script setup lang="ts">
defineProps<TransactionsProps>()
</script>

<template>
  <section class="transactions">
    <AccountDetailsTransaction
      v-for="transaction in transactions"
      :key="transaction.transactionId"
      :transaction="transaction"
      :currencyCode="currencyCode"
    />
  </section>
</template>

<style scoped lang="scss">
.transactions {
  @include cardStyle;
  padding: 0;
}
</style>
