import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OverviewContentAccountGroups from '../OverviewContentAccountGroups.vue'
import { mockAccountGroup } from '@/utils/test/mocks'

const getWrapper = () =>
  mount(OverviewContentAccountGroups, {
    props: { accountGroups: [mockAccountGroup] }
  })

describe('OverviewContentAccountGroups', () => {
  it('renders properly', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Current Accounts')
    expect(wrapper.text()).toContain('NL18ABNA5476393838')
    expect(wrapper.text()).toContain('€ 7500.39')
    expect(wrapper.text()).toContain('John Doe')
  })
})
