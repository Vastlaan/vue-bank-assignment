<script lang="ts">
import getDisplayBalance from '@/utils/getDisplayBalance'
import OverviewContentAccountButtons from './AccountDetailsButtons.vue'
interface AccountDetailsItem {
  label: string
  value: string | number | undefined
}
interface AccountDetailsInfoExpendedProps {
  accountNumber: string
  balance?: number
  currencyCode: string
  accountDetails: AccountDetailsItem[]
  hideDetails: () => void
}
</script>

<script lang="ts" setup>
const props = defineProps<AccountDetailsInfoExpendedProps>()
const displayedBalance = getDisplayBalance({
  balance: props.balance,
  currencyCode: props.currencyCode
})
</script>
<template>
  <section class="details">
    <h3 class="details__iban" aria-label="account number">{{ accountNumber }}</h3>
    <p class="details__balance" aria-label="account balance">{{ displayedBalance }}</p>
    <div class="details__aggregated">
      <div v-for="(item, index) of accountDetails" :key="index">
        <div class="details__aggregated--item" v-if="item">
          <label>{{ item?.label }}: </label>
          <p>{{ item?.value }}</p>
        </div>
      </div>
    </div>
    <OverviewContentAccountButtons
      icon="fa-chevron-up"
      :action="hideDetails"
      buttonTitle="Hide Account Details"
      :url="'/accounts?account=' + accountNumber"
    />
  </section>
</template>

<style scoped lang="scss">
.details {
  @include cardStyle;
  display: grid;
  grid-template-columns: 1fr 10rem 15rem 15rem;
  grid-template-areas:
    'iban iban balance buttons'
    'details details details buttons';
  grid-row-gap: 1.6rem;
  grid-column-gap: 1rem;

  @include respond('m') {
    grid-template-columns: 1fr 1fr 7rem 10rem;
    grid-template-areas:
      'iban iban iban balance'
      'details details details details'
      'buttons buttons buttons buttons';
  }

  &__iban {
    grid-area: iban;
    @include accountBoldFont;
  }
  &__balance {
    grid-area: balance;
    justify-self: end;
    color: $color-primary-dark;
    @include accountBoldFont;
  }
  &__aggregated {
    grid-area: details;
    display: flex;
    flex-direction: column;

    &--item {
      display: flex;
      font-size: 1.4rem;
      margin: 0.5rem 0;

      label {
        font-weight: 500;
        margin-right: 0.8rem;
      }
    }
  }
}
</style>
