import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import OverviewContent from '../OverviewContent.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'
import * as useAccountsApi from '@/composables/useAccountsApi'
import { ref } from 'vue'

const mockAccountGroup = {
  groupName: 'Current Accounts',
  groupId: 'current',
  accounts: [
    {
      accountNumberType: 'IBAN',
      accountNumber: 'NL18ABNA5476393838',
      productName: 'Current Account',
      currencyCode: 'EUR',
      holderName: 'John Doe',
      bankCountryCode: 'BE',
      bankIdentifierCode: 'ZYABBE20',
      balance: 7500.39
    }
  ]
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

vi.mock('@/composables/useAccountsApi')

const getWrapper = () =>
  mount(OverviewContent, {
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })

describe('OverviewContent', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly error state', async () => {
    vi.spyOn(useAccountsApi, 'default').mockReturnValue({
      loading: ref(true),
      error: ref('An error has occured'),
      accountGroups: ref([])
    })
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('An error has occured')
  })
  it('renders properly when loading data', async () => {
    vi.spyOn(useAccountsApi, 'default').mockReturnValue({
      loading: ref(true),
      error: ref(null),
      accountGroups: ref([])
    })
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Please wait ...')
  })
  it('renders properly when loading data', async () => {
    vi.spyOn(useAccountsApi, 'default').mockReturnValue({
      loading: ref(false),
      error: ref(null),
      accountGroups: ref([mockAccountGroup])
    })
    const wrapper = getWrapper()
    console.log({ w: wrapper.text() })
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('7500.39')
    expect(wrapper.text()).toContain('John Doe')
  })
})
