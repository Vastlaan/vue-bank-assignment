import { computed } from 'vue'

interface DisplayedBalanceProps {
  balance?: number
  currencyCode: string
}
export default function getDisplayBalance({ balance, currencyCode }: DisplayedBalanceProps) {
  return computed(() => {
    const prefix = currencyCode === 'EUR' ? '€' : '$'
    const amount = typeof balance === 'number' ? balance.toFixed(2) : 'NaN'
    return `${prefix} ${amount}`
  })
}
