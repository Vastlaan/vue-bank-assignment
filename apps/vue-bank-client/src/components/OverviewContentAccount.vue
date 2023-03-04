<script lang="ts">
import type { Account } from '@/types'
interface AccountProps {
  account: Account
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'
import OverviewContentAccountCard from './OverviewContentAccountCard.vue'

const props = defineProps<AccountProps>()
const displayedBalance = computed(() => {
  const prefix = props.account.currencyCode === 'EUR' ? '€' : '$'
  const amount = props?.account?.balance || props?.account?.bookBalance
  return `${prefix} ${amount?.toFixed(2)}`
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
