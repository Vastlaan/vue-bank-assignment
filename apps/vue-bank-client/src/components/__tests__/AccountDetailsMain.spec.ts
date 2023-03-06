import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AccountDetailsMain from '../AccountDetailsMain.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import * as useAccountDetailsApi from '@/composables/useAccountDetailsApi'
import { computed, ref } from 'vue'
import { mockAccountDetails } from '@/utils/test/mocks'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

vi.mock('@/composables/useAccountDetailsApi')

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
  })

  it('renders properly loading state', async () => {
    vi.spyOn(useAccountDetailsApi, 'default').mockReturnValue({
      loading: ref(true),
      error: ref(null),
      accountTransactions: computed(() => []),
      accountDetails: computed(() => undefined),
      accountExactInfo: computed(() => [])
    })

    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Transactions')
    expect(wrapper.text()).toContain('Please wait ...')
  })

  it('renders properly error state', async () => {
    vi.spyOn(useAccountDetailsApi, 'default').mockReturnValue({
      loading: ref(false),
      error: ref('An error'),
      accountTransactions: computed(() => []),
      accountDetails: computed(() => undefined),
      accountExactInfo: computed(() => [])
    })

    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Transactions')
    expect(wrapper.text()).toContain('An error has occured. Please try again later')
  })

  it('renders properly account details state', async () => {
    vi.spyOn(useAccountDetailsApi, 'default').mockReturnValue({
      loading: ref(false),
      error: ref(null),
      accountTransactions: computed(() => []),
      accountDetails: computed(() => mockAccountDetails),
      accountExactInfo: computed(() => [])
    })

    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Account Details')
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('€ 7500.39')
  })
})
