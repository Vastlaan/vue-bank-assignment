<script lang="ts">
interface ModalProps {
  closeModal: () => void
  transaction: Transaction
  amountDisplay: string
  isAmountPositive: boolean
}
</script>
<script setup lang="ts">
import type { Transaction } from '@/types'
import { computed } from 'vue'
import HeadingLarge from './designSystem/HeadingLarge.vue'
import TextNormal from './designSystem/TextNormal.vue'
import TransactionModalItem from './TransactionModalItem.vue'

const props = defineProps<ModalProps>()
const dateTime = computed(() => {
  return new Date(props.transaction.bookDate).toLocaleDateString()
})
</script>

<template>
  <div class="modal" role="button" @click.self="closeModal">
    <div class="inner">
      <div class="close">
        <button @click="closeModal">
          <font-awesome-icon icon="fa-chevron-left" data-testid="icon" />
          Back
        </button>
      </div>
      <div class="main">
        <TextNormal :text="transaction.counterpartyName" />
        <HeadingLarge :text="amountDisplay" :color="isAmountPositive ? 'primary' : 'primaryDark'" />
      </div>
      <TransactionModalItem :text="dateTime" label="Execution" />
      <TransactionModalItem :text="transaction.counterpartyAccountNumber" label="From account" />
      <TransactionModalItem :text="transaction.description" label="Description" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@include includeColorClasses;
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  width: 65rem;
  padding: 2.7rem 2.7rem 4.7rem 2.7rem;
  background-color: $color-bg;
  border: 2px solid $color-primary-dark;

  @include respond('m') {
    width: 45rem;
  }
}
.close {
  color: $color-primary;
  font-size: 1.6rem;

  button {
    all: unset;
    padding: 1.2rem 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &:hover,
  :focus {
    color: $color-primary-dark;
  }
}
.main {
  padding: 2.7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid $color-primary;

  & > p {
    margin-bottom: 0.8rem;
  }
}
</style>
