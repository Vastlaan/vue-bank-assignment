import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OverviewContentAccount from '../OverviewContentAccount.vue'
import { mockAccountDetails } from '@/utils/test/mocks'
import * as theRouter from '@/router'

const getWrapper = () =>
  mount(OverviewContentAccount, {
    props: { account: mockAccountDetails }
  })

describe('OverviewContentAccount', () => {
  it('renders properly and navigates to account details when clicked', async () => {
    const push = vi.spyOn(theRouter.default, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('€ 7500.39')
    expect(wrapper.text()).toContain('John Doe')

    const buttonDiv = wrapper.find('div[role="button"]')
    buttonDiv.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/accounts/details?accountNumber=NL18ABNA5476393838')
  })
})
