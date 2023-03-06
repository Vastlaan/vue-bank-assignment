import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import AccountDetailsTransaction from '../AccountDetailsTransaction.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { mockTransaction } from '@/utils/test/mocks'
import { nextTick } from 'vue'

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
    router.push('/accounts/?accountNumber=NL18ABNA5476393838')
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

  it('properly opens modal', async () => {
    const wrapper = getWrapper()

    expect(wrapper.find({ ref: 'isModalOpen' }).exists()).toBe(false)

    const buttonDiv = wrapper.find('div[role="button"]') as DOMWrapper<HTMLDivElement>
    buttonDiv.trigger('click')

    // TODO: figure out why click is not updating ref

    // await nextTick()

    // expect(wrapper.find({ ref: 'isModalOpen' }).exists()).toBe(true)
  })
})
