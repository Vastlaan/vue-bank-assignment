<script lang="ts">
import type { Transaction } from '@/types'
import AccountDetailsTransaction from './AccountDetailsTransaction.vue'
import HeadingNormal from './designSystem/HeadingNormal.vue'
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
    <HeadingNormal text="Transactions" />
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
