import { describe, it, expect, vi, type Mock, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AccountDetailsMain from '../AccountDetailsMain.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'
import { mockAccountDetails, mockTransaction } from '@/utils/test/mocks'

const mockFetch = (global.fetch = vi.fn() as Mock)

function fetchResponseSuccess() {
  return {
    json: () =>
      new Promise((resolve) =>
        resolve({
          data: { accountDetails: mockAccountDetails, accountTransactions: [mockTransaction] }
        })
      ),
    ok: true
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(AccountDetailsMain, {
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsMain', () => {
  beforeEach(async () => {
    router.push('/accounts/?accountNumber=NL18ABNA5476393838')
    await router.isReady()
    mockFetch.mockResolvedValue(fetchResponseSuccess())
  })

  it('renders properlyt', async () => {
    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Transactions')
    expect(wrapper.text()).toContain('Please wait ...')

    await flushPromises()
    await nextTick()
    await nextTick()
    await nextTick()

    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain(850)
  })
})
