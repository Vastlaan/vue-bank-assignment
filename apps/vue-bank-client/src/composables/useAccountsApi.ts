import { ref } from 'vue'
import type { Nullable, AccountGroup, AccountsData } from '@/types'

export default function useAccountsApi() {
  const accountGroups = ref<AccountGroup[]>([])
  const loading = ref<boolean>(true)
  const error = ref<Nullable<unknown>>(null)

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/accounts')
      if (!response.ok) {
        loading.value = false
        error.value = 'Something went wrong while fetching the data'
      } else {
        const responseData = (await response.json()) as AccountsData
        loading.value = false
        accountGroups.value = responseData.data.accountGroups
      }
    } catch (err) {
      loading.value = false
      error.value = err
    }
  }

  fetchData()

  return {
    accountGroups,
    loading,
    error
  }
}
