import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OverviewContentAccounts from '../OverviewContentAccounts.vue'
import { mockAccountDetails } from '@/utils/test/mocks'

const getWrapper = () =>
  mount(OverviewContentAccounts, {
    props: { accounts: [mockAccountDetails] }
  })

describe('OverviewContentAccounts', () => {
  it('renders properly', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('€ 7500.39')
    expect(wrapper.text()).toContain('John Doe')
  })
})
