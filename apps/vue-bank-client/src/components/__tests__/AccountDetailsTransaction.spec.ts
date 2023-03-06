import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import AccountDetailsTransaction from '../AccountDetailsTransaction.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { mockTransaction } from '@/utils/test/mocks'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const defaultProps = {
  transaction: mockTransaction,
  currencyCode: 'EUR'
}

vi.mock('@/composables/useTransactions')

const getWrapper = () =>
  mount(AccountDetailsTransaction, {
    props: defaultProps,
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsTransaction', () => {
  beforeEach(async () => {
    const el = document.createElement('div')
    el.id = 'app'
    document.body.appendChild(el)
    router.push('/accounts')
    await router.isReady()
  })

  afterEach(() => {
    document.body.outerHTML = ''
  })

  it('renders properly', async () => {
    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Tennant 1')
    expect(wrapper.text()).toContain('€ + 850.00')
  })

  it.todo('properly opens modal', async () => {})
})
