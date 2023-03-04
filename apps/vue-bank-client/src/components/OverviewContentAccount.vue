<script lang="ts">
import type { Account } from '@/types'
import getDisplayBalance from '@/utils/getDisplayBalance'
import router from '@/router'
import OverviewContentAccountCard from './OverviewContentAccountCard.vue'
interface AccountProps {
  account: Account
}
</script>

<script setup lang="ts">
const props = defineProps<AccountProps>()
const displayedBalance = getDisplayBalance({
  balance: props?.account?.balance || props?.account?.bookBalance,
  currencyCode: props.account.currencyCode
})
function navigateToDetailedPage() {
  router.push(`/accounts/details?accountNumber=${props.account.accountNumber}`)
}
</script>

<template>
  <div
    class="accountWrapper"
    role="button"
    tabindex="0"
    @click="navigateToDetailedPage"
    @keydown="navigateToDetailedPage"
  >
    <OverviewContentAccountCard
      :displayedBalance="displayedBalance"
      :accountNumber="account.accountNumber"
      :owner="account.holderName"
    />
  </div>
</template>

<style scoped lang="scss">
.accountWrapper {
  &:hover {
    background-color: $color-grey-light;
    cursor: pointer;
  }
}
</style>
