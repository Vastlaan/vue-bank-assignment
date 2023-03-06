import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import TransactionModal from '../TransactionModal.vue'
import { mockTransaction } from '@/utils/test/mocks'
import findByText from '@/utils/test/findByText'

const mockCloseModal = vi.fn()

const defaultProps = {
  closeModal: mockCloseModal,
  transaction: mockTransaction,
  amountDisplay: '€ 7500.39',
  isAmountPositive: true
}
const getWrapper = () =>
  mount(TransactionModal, {
    props: defaultProps,
    global: {
      stubs: ['FontAwesomeIcon']
    }
  })

describe('TransactionModal', () => {
  it('renders properly and navigates to account details when clicked', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Tennant 1')
    expect(wrapper.text()).toContain('€ 7500.39')
    expect(wrapper.text()).toContain('Execution')
    expect(wrapper.text()).toContain('dinsdag 29 december 2020 om 23:00:00')
    expect(wrapper.text()).toContain('From account')
    expect(wrapper.text()).toContain('NL53INGB6653222179')
    expect(wrapper.text()).toContain('Description')
    expect(wrapper.text()).toContain('Rent Dec 2020')

    const backButton = findByText(wrapper, 'button', 'Back') as DOMWrapper<HTMLButtonElement>
    backButton.trigger('click')

    expect(mockCloseModal).toHaveBeenCalledOnce()
  })
})
