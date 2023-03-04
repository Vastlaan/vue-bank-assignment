import { ref } from 'vue'
import type { Nullable, AccountAttributes } from '@/types'

export default function useTransactionsApi(accountNumber: string | null) {
  const accountAttributes = ref<Nullable<AccountAttributes>>(null)
  const loading = ref<boolean>(true)
  const error = ref<Nullable<unknown>>(null)

  async function fetchAccountAttributes() {
    try {
      const response = await fetch(`http://localhost:5011/api/accounts/${accountNumber}`)
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

  return {
    accountAttributes,
    loading,
    error
  }
}
