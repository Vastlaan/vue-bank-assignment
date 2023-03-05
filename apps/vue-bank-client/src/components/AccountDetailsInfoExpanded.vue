<script lang="ts">
import TextNormal from './designSystem/TextNormal.vue'
import getDisplayBalance from '@/utils/getDisplayBalance'
import OverviewContentAccountButtons from './AccountDetailsButtons.vue'
import AccountDetailsInfoExpandedItem from './AccountDetailsInfoExpandedItem.vue'
import type { AccountDetailsItem } from '@/types'

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
    <div class="aggregated">
      <ul v-for="(item, index) of accountDetails" :key="index">
        <li>
          <AccountDetailsInfoExpandedItem :item="item" v-if="item" />
        </li>
      </ul>
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
}
.iban {
  grid-area: iban;
}
.balance {
  grid-area: balance;
  justify-self: end;
}
.aggregated {
  grid-area: details;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
