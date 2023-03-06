import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import AccountDetailsInfoExpanded from '../AccountDetailsInfoExpanded.vue'
import findByText from '@/utils/test/findByText'

const mockAction = vi.fn()

const defaultProps = {
  accountNumber: 'Some account number',
  balance: 1234,
  currencyCode: 'EUR',
  hideDetails: mockAction,
  accountDetails: [{ label: 'Saturday', value: '1000' }]
}

const getWrapper = () =>
  mount(AccountDetailsInfoExpanded, {
    props: defaultProps,
    global: {
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsInfoExpanded', () => {
  it('renders properly and calls the action when clicked', async () => {
    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Some account number')
    expect(wrapper.text()).toContain('€ 1234.00')
    expect(wrapper.text()).toContain('Saturday: 1000')
    expect(wrapper.text()).toContain('Hide Account Details')

    const button = findByText(
      wrapper,
      'button',
      'Hide Account Details'
    ) as DOMWrapper<HTMLButtonElement>
    button.trigger('click')
    expect(mockAction).toHaveBeenCalledOnce()
  })
})
