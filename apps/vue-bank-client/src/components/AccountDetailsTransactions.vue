<script lang="ts">
import type { Transaction } from '@/types'
import AccountDetailsTransaction from './AccountDetailsTransaction.vue'
import { optionsBasic } from '@/utils/getDateFromTimeString'
import HeadingSmall from './designSystem/HeadingSmall.vue'
import SearchboxPure from './designSystem/SearchboxPure.vue'
import useTransactions from '@/composables/useTransactions'
interface TransactionsProps {
  transactions: Transaction[]
  currencyCode: string
}
</script>

<script setup lang="ts">
const props = defineProps<TransactionsProps>()
const { theFilter, groupedTransactions, groupedTransactionsKeys } = useTransactions(
  props.transactions
)
</script>

<template>
  <section class="transactions">
    <SearchboxPure>
      <input
        class="searchInput"
        name="search-transactions"
        v-model="theFilter"
        placeholder="Search transactions"
      />
      <font-awesome-icon class="searchIcon" icon="fa-magnifying-glass" data-testid="icon" />
    </SearchboxPure>
    <div class="groupedTransactions" v-for="key in groupedTransactionsKeys" :key="key">
      <div class="daySection">
        <HeadingSmall
          color="primary"
          :text="new Date(key).toLocaleDateString('nl-NL', optionsBasic)"
        />
      </div>
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
.daySection {
  margin-left: 1.6rem;
}
.searchIcon {
  background-color: $color-primary-dark;
  border: 4px solid $color-primary-dark;
  color: $color-bg;
  align-self: center;
  font-size: 1.6rem;
  padding: 1rem;
}
.searchInput {
  border: 1px solid transparent;
  padding: 0.4rem 1.2rem;
  font-size: 1.6rem;

  &:focus,
  :active {
    outline: none;
    border: 1px solid $color-primary-dark;
  }
}
</style>
