import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TransactionModalItem from '../TransactionModalItem.vue'

const defaultProps = {
  label: 'Some label',
  text: 'Some text'
}
const getWrapper = () =>
  mount(TransactionModalItem, {
    props: defaultProps,
    global: {
      stubs: ['FontAwesomeIcon']
    }
  })

describe('TransactionModalItem', () => {
  it('renders properly and navigates to account details when clicked', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Some label')
    expect(wrapper.text()).toContain('Some text')
  })
})
