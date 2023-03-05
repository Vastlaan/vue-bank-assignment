<script lang="ts">
import getDisplayBalance from '@/utils/getDisplayBalance'
import OverviewContentAccountButtons from './AccountDetailsButtons.vue'
interface AccountDetailsInfoProps {
  accountNumber: string
  balance?: number
  currencyCode: string
  showDetails: () => void
}
</script>

<script lang="ts" setup>
const props = defineProps<AccountDetailsInfoProps>()
const displayedBalance = getDisplayBalance({
  balance: props.balance,
  currencyCode: props.currencyCode
})
</script>

<template>
  <section class="account">
    <h3 class="iban" aria-label="account number">{{ accountNumber }}</h3>
    <p class="balance" aria-label="account balance">{{ displayedBalance }}</p>
    <OverviewContentAccountButtons
      icon="fa-chevron-down"
      :action="showDetails"
      buttonTitle="Show Account Details"
      :url="'/accounts?account=' + accountNumber"
    />
  </section>
</template>

<style scoped lang="scss">
.account {
  @include cardStyle;
  display: grid;
  grid-template-columns: 1fr 10rem 15rem 15rem;
  grid-template-areas:
    'iban iban balance buttons'
    '. . . buttons';
  grid-row-gap: 1.6rem;
  grid-column-gap: 1rem;

  @include respond('m') {
    grid-template-columns: 1fr 10rem 7rem 10rem;
    grid-template-areas:
      'iban iban iban balance'
      'buttons buttons buttons buttons';
  }

  @include respond('s') {
    grid-template-columns: 1fr 1fr 7rem 10rem;
    grid-template-areas:
      'iban iban iban balance'
      'buttons buttons buttons buttons';
  }
}
.iban {
  grid-area: iban;
  @include accountBoldFont;
}

.balance {
  grid-area: balance;
  justify-self: end;
  color: $color-primary-dark;
  @include accountBoldFont;
}
</style>
