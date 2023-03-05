import type { Transaction } from '@/types'
import groupBy from '@/utils/groupBy'
import { computed, ref, type WritableComputedRef } from 'vue'

export default function useTransactions(transactions: Transaction[]) {
  const filter = ref('')
  const theFilter: WritableComputedRef<string> = computed({
    get() {
      return filter.value
    },
    set(newValue) {
      filter.value = newValue
    }
  })
  const filteredTransactions = computed(() => {
    return transactions.filter((transaction) => {
      if (theFilter.value) {
        return (
          transaction.counterpartyName
            .toLocaleLowerCase()
            .includes(theFilter.value.toLocaleLowerCase()) ||
          transaction.description.toLocaleLowerCase().includes(theFilter.value.toLocaleLowerCase())
        )
      } else {
        return true
      }
    })
  })
  const groupedTransactions = computed(() => {
    return groupBy(filteredTransactions.value, 'bookDate')
  })
  const groupedTransactionsKeys = computed(() => Object.keys(groupedTransactions.value))

  return { groupedTransactionsKeys, groupedTransactions, theFilter }
}
