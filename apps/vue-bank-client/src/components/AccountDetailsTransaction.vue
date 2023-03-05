<script lang="ts">
import { computed, ref } from 'vue'
import TransactionModal from './TransactionModal.vue'
import TextNormal from './designSystem/TextNormal.vue'
import type { Transaction } from '@/types'
interface TransactionProps {
  transaction: Transaction
  currencyCode: string
}
</script>

<script setup lang="ts">
const props = defineProps<TransactionProps>()
const isModalOpen = ref(false)

function closeModal() {
  isModalOpen.value = false
}
function openTransactionDetailsModal() {
  isModalOpen.value = true
}
const isAmountPositive = computed(() => props.transaction.creditDebitIndicator === 'CREDIT')
const amountDisplay = computed(() => {
  const currency = props.currencyCode === 'EUR' ? '€' : '$'
  const prefix = isAmountPositive.value ? '+' : '-'
  const amount = props.transaction.amount.toFixed(2)
  return `${currency} ${prefix} ${amount}`
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
    <TextNormal :text="transaction.counterpartyName" />
    <TextNormal :text="amountDisplay" :color="isAmountPositive ? 'primary' : undefined" />
  </div>
  <Teleport to="#app">
    <TransactionModal
      v-if="isModalOpen"
      :closeModal="closeModal"
      :transaction="transaction"
      :amountDisplay="amountDisplay"
      :isAmountPositive="isAmountPositive"
    />
  </Teleport>
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

  &:hover {
    background-color: $color-grey-light;
  }
}
</style>
