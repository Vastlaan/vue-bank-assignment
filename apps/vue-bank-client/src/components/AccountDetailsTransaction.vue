<script lang="ts">
import type { Transaction } from '@/types'
import { computed } from 'vue'
interface TransactionProps {
  transaction: Transaction
}
</script>
<script setup lang="ts">
const props = defineProps<TransactionProps>()
function openTransactionDetailsModal() {
  console.log('open modal')
}
const isAmountPositive = computed(() => props.transaction.creditDebitIndicator === 'CREDIT')
const amountDisplay = computed(() => {
  const prefix = isAmountPositive.value ? '+' : '-'
  const amount = props.transaction.amount.toFixed(2)
  return `${prefix} ${amount}`
})
</script>

<template>
  <div
    class="transaction"
    role="button"
    tabindex="0"
    @click="openTransactionDetailsModal"
    @keydown="openTransactionDetailsModal"
  >
    <p>{{ transaction.counterpartyName }}</p>
    <p :class="isAmountPositive ? 'color-primary' : undefined">{{ amountDisplay }}</p>
  </div>
</template>

<style scoped lang="scss">
@include includeColorClasses;
.transaction {
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 1.6rem;
  border-bottom: 1px solid lighten($color-grey-normal, 20%);
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: $color-grey-light;
  }
}
</style>
