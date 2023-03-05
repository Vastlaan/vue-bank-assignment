<script lang="ts">
import TextNormal from './designSystem/TextNormal.vue'
import getDisplayBalance from '@/utils/getDisplayBalance'
import OverviewContentAccountButtons from './AccountDetailsButtons.vue'
export interface AccountDetailsInfoProps {
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
    <div class="iban">
      <TextNormal aria-label="account number" :text="accountNumber" isBold />
    </div>
    <div class="balance">
      <TextNormal
        aria-label="account balance"
        :text="displayedBalance"
        color="primaryDark"
        isBold
      />
    </div>
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
}

.balance {
  grid-area: balance;
  justify-self: end;
}
</style>
