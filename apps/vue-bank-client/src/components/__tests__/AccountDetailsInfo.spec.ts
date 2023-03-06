import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import AccountDetailsInfo from '../AccountDetailsInfo.vue'
import findByText from '@/utils/test/findByText'

const mockAction = vi.fn()

const defaultProps = {
  accountNumber: 'Some account number',
  balance: 1234,
  currencyCode: 'EUR',
  showDetails: mockAction
}

const getWrapper = () =>
  mount(AccountDetailsInfo, {
    props: defaultProps,
    global: {
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsInfo', () => {
  it('renders properly and calls the action when clicked', async () => {
    const wrapper = getWrapper()

    expect(wrapper.text()).toContain('Some account number')
    expect(wrapper.text()).toContain('€ 1234.00')
    expect(wrapper.text()).toContain('Show Account Details')

    const button = findByText(
      wrapper,
      'button',
      'Show Account Details'
    ) as DOMWrapper<HTMLButtonElement>
    button.trigger('click')
    expect(mockAction).toHaveBeenCalledOnce()
  })
})
