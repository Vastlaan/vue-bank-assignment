import { computed, ref } from 'vue'
import type { Nullable, AccountAttributes, Account } from '@/types'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'

type AccountKey = keyof Account

export default function useAccountDetailsApi(accountNumber: string | null) {
  const accountAttributes = ref<Nullable<AccountAttributes>>(null)
  const loading = ref<boolean>(true)
  const error = ref<Nullable<unknown>>(null)

  async function fetchAccountAttributes() {
    try {
      const response = await fetch(`/api/accounts/${accountNumber}`)
      if (!response.ok) {
        loading.value = false
        error.value = 'Something went wrong while fetching the data'
      } else {
        const responseData = (await response.json()) as { data: AccountAttributes }
        loading.value = false
        accountAttributes.value = responseData.data
      }
    } catch (err) {
      loading.value = false
      error.value = err
    }
  }

  fetchAccountAttributes()

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

  return {
    loading,
    error,
    accountTransactions,
    accountDetails,
    accountExactInfo
  }
}
