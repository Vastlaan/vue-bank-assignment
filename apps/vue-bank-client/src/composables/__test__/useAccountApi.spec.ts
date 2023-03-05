import { describe, expect, it, vi, type Mock } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import useAccountsApi from '../useAccountsApi'
import { nextTick } from 'vue'
import { mockAccountGroup } from '@/utils/test/mocks'

const mockFetch = (global.fetch = vi.fn() as Mock)

function fetchResponseSuccess() {
  return {
    json: () => new Promise((resolve) => resolve({ data: { accountGroups: [mockAccountGroup] } })),
    ok: true
  }
}
function fetchResponseError() {
  return { json: () => new Promise((reject) => reject('An error')), ok: false }
}

describe('useAccountsApi', () => {
  it('returns error state when response fails', async () => {
    mockFetch.mockResolvedValue(fetchResponseSuccess())

    const result = useAccountsApi()
    expect(result.error.value).toBe(null)
    expect(result.loading.value).toBe(true)
    await flushPromises()
    await nextTick()
    await nextTick()
    await nextTick()

    expect(result.accountGroups.value).toStrictEqual([mockAccountGroup])
  })
  it('returns error state when response fails', async () => {
    mockFetch.mockResolvedValue(fetchResponseError())

    const result = useAccountsApi()
    expect(result.error.value).toBe(null)
    expect(result.loading.value).toBe(true)
    await flushPromises()
    await nextTick()

    expect(result.error.value).toBe('Something went wrong while fetching the data')
  })
})
