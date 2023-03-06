import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OverviewContentAccountCard from '../OverviewContentAccountCard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { mockAccountDetails } from '@/utils/test/mocks'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const defaultProps = {
  accountNumber: mockAccountDetails.accountNumber,
  displayedBalance: '€ 7500.39',
  owner: mockAccountDetails.holderName
}

const getWrapper = () =>
  mount(OverviewContentAccountCard, {
    props: defaultProps,
    global: {
      plugins: [router]
    }
  })

describe('OverviewContentAccountCard', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('€ 7500.39')
    expect(wrapper.text()).toContain('John Doe')
  })
})
