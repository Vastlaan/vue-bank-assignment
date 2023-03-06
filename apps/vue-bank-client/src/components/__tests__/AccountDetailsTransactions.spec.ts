import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AccountDetailsTransactions from '../AccountDetailsTransactions.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import * as useTransactions from '@/composables/useTransactions'
import { mockTransaction } from '@/utils/test/mocks'
import { computed } from 'vue'
import groupBy from '@/utils/groupBy'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const defaultProps = {
  transactions: [mockTransaction],
  currencyCode: 'EUR'
}

vi.mock('@/composables/useTransactions')

const getWrapper = () =>
  mount(AccountDetailsTransactions, {
    props: defaultProps,
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsTransactions', () => {
  beforeEach(async () => {
    router.push('/accounts/?accountNumber=NL18ABNA5476393838')
    await router.isReady()
  })

  it('renders properly', async () => {
    vi.spyOn(useTransactions, 'default').mockReturnValue({
      groupedTransactionsKeys: computed(() => ['2020-12-29T22:00:00Z']),
      groupedTransactions: computed(() => groupBy([mockTransaction], 'bookDate')),
      theFilter: computed(() => '')
    })

    const wrapper = getWrapper()

    expect(wrapper.find('input[palceholder="Search transactions"]')).toBeTruthy()
    expect(wrapper.text()).toContain('dinsdag 29 december 2020')
  })

  it('properly displays filtered value in the input', async () => {
    vi.spyOn(useTransactions, 'default').mockReturnValue({
      groupedTransactionsKeys: computed(() => ['2020-12-29T22:00:00Z']),
      groupedTransactions: computed(() => groupBy([mockTransaction], 'bookDate')),
      theFilter: computed(() => 'filter')
    })

    const wrapper = getWrapper()

    expect(wrapper.find('input[value="filter"]')).toBeTruthy()
    expect(wrapper.text()).toContain('dinsdag 29 december 2020')
  })
})
