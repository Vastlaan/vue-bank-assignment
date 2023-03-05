import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AccountDetailsInfoExpandedItem from '../AccountDetailsInfoExpandedItem.vue'

const defaultProps = {
  item: {
    label: 'Saturday',
    value: '1000'
  }
}

const getWrapper = () =>
  mount(AccountDetailsInfoExpandedItem, {
    props: defaultProps
  })
describe('AccountDetailsInfoExpandedItem', () => {
  it('renders properly', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Saturday: 1000')
  })
})
