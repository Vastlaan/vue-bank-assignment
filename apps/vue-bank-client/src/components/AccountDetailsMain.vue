<script lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useAccountDetailsApi from '@/composables/useAccountDetailsApi'
import LoadingSpinner from './designSystem/LoadingSpinner.vue'
import ErrorMessage from './designSystem/ErrorMessage.vue'
import AccountDetailsInfo from './AccountDetailsInfo.vue'
import AccountDetailsInfoExpanded from './AccountDetailsInfoExpanded.vue'
import HeadingNormal from './designSystem/HeadingNormal.vue'
import AccountDetailsTransactions from './AccountDetailsTransactions.vue'
</script>

<script setup lang="ts">
const route = useRoute()
const isDetailOpen = ref(false)

function showDetails() {
  isDetailOpen.value = true
}
function hideDetails() {
  isDetailOpen.value = false
}

const accountNumber = route.query.accountNumber as string
const { loading, error, accountDetails, accountTransactions, accountExactInfo } =
  useAccountDetailsApi(accountNumber)
</script>

<template>
  <main class="accountDetails">
    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-if="error" message="An error has occured. Please try again later" />
    <HeadingNormal v-if="accountDetails" text="Account Details" />
    <AccountDetailsInfo
      v-if="accountDetails && !isDetailOpen"
      :accountNumber="accountDetails.accountNumber"
      :balance="accountDetails.balance || accountDetails.bookBalance"
      :currencyCode="accountDetails.currencyCode"
      :showDetails="showDetails"
    />
    <AccountDetailsInfoExpanded
      v-if="accountDetails && isDetailOpen"
      :accountNumber="accountDetails.accountNumber"
      :balance="accountDetails.balance || accountDetails.bookBalance"
      :currencyCode="accountDetails.currencyCode"
      :hideDetails="hideDetails"
      :accountDetails="accountExactInfo"
    />
    <HeadingNormal text="Transactions" />
    <AccountDetailsTransactions
      v-if="accountTransactions && accountDetails"
      :transactions="accountTransactions"
      :currencyCode="accountDetails.currencyCode"
    />
  </main>
</template>

<style scoped lang="scss">
.accountDetails {
  padding: 2.7rem;

  @include respond('s') {
    padding: 2.7rem 1.2rem;
  }
}
</style>
