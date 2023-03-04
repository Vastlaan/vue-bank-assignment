<script lang="ts">
import type { Account } from '@/types'
type AccountKey = keyof Account
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import useAccountDetailsApi from '@/composables/useAccountDetailsApi'
import LoadingSpinner from './designSystem/LoadingSpinner.vue'
import ErrorMessage from './designSystem/ErrorMessage.vue'
import AccountDetailsInfo from './AccountDetailsInfo.vue'
import AccountDetailsInfoExpanded from './AccountDetailsInfoExpanded.vue'
import HeadingNormalVue from './designSystem/HeadingNormal.vue'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'

const route = useRoute()
const isDetailOpen = ref(false)
function showDetails() {
  isDetailOpen.value = true
}
function hideDetails() {
  isDetailOpen.value = false
}

const accountNumber = route.query.accountNumber as string
const { loading, error, accountAttributes } = useAccountDetailsApi(accountNumber)
const accountDetails = computed(() => accountAttributes.value?.accountDetails)
const accountTransactions = computed(() => accountAttributes.value?.accountTransactions)
const accountExactInfo = computed(() => {
  if (accountDetails.value) {
    const keys = Object.keys(accountDetails.value) as Array<AccountKey>
    const details = keys
      .map((item) => {
        if (!['bookBalance', 'balance', 'accountNumber'].includes(item)) {
          return {
            label: capitalizeFirstLetter(item.replace(/([a-z])([A-Z])/g, '$1 $2')),
            value: accountDetails.value ? accountDetails.value[`${item}`] : ''
          }
        }
      })
      .filter((detail) => detail !== undefined) as { label: string; value: string }[]
    return details
  } else {
    return []
  }
})
</script>

<template>
  <main class="accountDetails">
    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-if="error" message="An error has occured. Please try again later" />
    <HeadingNormalVue v-if="accountDetails" text="Account Details" />
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
