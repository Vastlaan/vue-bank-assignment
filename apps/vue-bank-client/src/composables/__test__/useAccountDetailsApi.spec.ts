import { describe, expect, it, vi, type Mock } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import useAccountDetailsApi from '../useAccountDetailsApi'
import { nextTick } from 'vue'
import { mockAccountDetails } from '@/utils/test/mocks'

const mockFetch = (global.fetch = vi.fn() as Mock)

function fetchResponseSuccess() {
  return {
    json: () =>
      new Promise((resolve) =>
        resolve({ data: { accountDetails: mockAccountDetails, accountTransactions: [] } })
      ),
    ok: true
  }
}
function fetchResponseError() {
  return { json: () => new Promise((reject) => reject('An error')), ok: false }
}

describe('useAccountDetailsApi', () => {
  it('returns error state when response fails', async () => {
    mockFetch.mockResolvedValue(fetchResponseSuccess())

    const result = useAccountDetailsApi('1234')
    expect(result.error.value).toBe(null)
    expect(result.loading.value).toBe(true)
    await flushPromises()
    await nextTick()
    await nextTick()
    await nextTick()

    expect(result.accountDetails.value).toStrictEqual(mockAccountDetails)
    expect(result.accountExactInfo.value).toStrictEqual([
      { label: 'Account Number Type', value: 'IBAN' },
      { label: 'Product Name', value: 'Current Account' },
      { label: 'Currency Code', value: 'EUR' },
      { label: 'Holder Name', value: 'John Doe' },
      { label: 'Bank Country Code', value: 'BE' },
      { label: 'Bank Identifier Code', value: 'ZYABBE20' }
    ])
    expect(result.accountTransactions.value).toStrictEqual([])
  })
  it('returns error state when response fails', async () => {
    mockFetch.mockResolvedValue(fetchResponseError())

    const result = useAccountDetailsApi('1234')
    expect(result.error.value).toBe(null)
    expect(result.loading.value).toBe(true)
    await flushPromises()
    await nextTick()

    expect(result.error.value).toBe('Something went wrong while fetching the data')
  })
})
