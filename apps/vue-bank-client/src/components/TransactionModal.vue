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
        <p class="name">{{ transaction.counterpartyName }}</p>
        <p class="amount" :class="isAmountPositive ? 'color-primary' : ''">{{ amountDisplay }}</p>
      </div>
      <div class="division">
        <h4>Execution</h4>
        <p>{{ dateTime }}</p>
      </div>
      <div class="division">
        <h4>From account</h4>
        <p>{{ transaction.counterpartyAccountNumber }}</p>
      </div>
      <div class="division">
        <h4>Description</h4>
        <p>{{ transaction.description }}</p>
      </div>
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
  min-width: 70rem;
  padding: 2.7rem 2.7rem 4.7rem 2.7rem;
  background-color: $color-bg;
  border: 2px solid $color-primary;

  @include respond('m') {
    min-width: 45rem;
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
}
.amount {
  font-size: 2.7rem;
  color: $color-primary;
}
.name {
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}
.division {
  padding: 1.9rem 0;
  border-bottom: 1px solid $color-grey-light;

  h4 {
    margin-bottom: 0.6rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: $color-primary-dark;
  }
  p {
    font-size: 1.4rem;
  }
}
</style>
