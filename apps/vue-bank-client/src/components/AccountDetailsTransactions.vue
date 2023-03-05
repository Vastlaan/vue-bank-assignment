<script lang="ts">
import type { Transaction } from '@/types'
import AccountDetailsTransaction from './AccountDetailsTransaction.vue'
import HeadingNormal from './designSystem/HeadingNormal.vue'
import TextNormal from './designSystem/TextNormal.vue'
import groupBy from '@/utils/groupBy'
import { optionsBasic } from '@/utils/getDateFromTimeString'
interface TransactionsProps {
  transactions: Transaction[]
  currencyCode: string
}
</script>

<script setup lang="ts">
const props = defineProps<TransactionsProps>()
const groupedTransactions = groupBy(props.transactions, 'bookDate')
const groupedTransactionsKeys = Object.keys(groupedTransactions)
</script>

<template>
  <section class="transactions">
    <HeadingNormal text="Transactions" />
    <div class="groupedTransactions" v-for="key in groupedTransactionsKeys" :key="key">
      <TextNormal color="primary" :text="new Date(key).toLocaleDateString('nl-NL', optionsBasic)" />
      <AccountDetailsTransaction
        v-for="transaction in groupedTransactions[key]"
        :key="transaction.transactionId"
        :transaction="transaction"
        :currencyCode="currencyCode"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.transactions {
  @include cardStyle;
  padding: 0;
}
.groupedTransactions {
  margin: 1.6rem 0;
  border-bottom: 1px solid $color-primary;
}
</style>
