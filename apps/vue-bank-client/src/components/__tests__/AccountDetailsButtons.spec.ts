import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import AccountDetailsButtons from '../AccountDetailsButtons.vue'
import findByText from '@/utils/test/findByText'

const mockAction = vi.fn()

const defaultProps = {
  buttonTitle: 'Some title',
  action: mockAction,
  icon: 'fa-home'
}

const getWrapper = () =>
  mount(AccountDetailsButtons, {
    props: defaultProps,
    global: {
      stubs: ['FontAwesomeIcon']
    }
  })
describe('AccountDetailsButtons', () => {
  it('renders properly and calls the action when clicked', async () => {
    const wrapper = getWrapper()

    const button = (await findByText(
      wrapper,
      'button',
      'Some title'
    )) as DOMWrapper<HTMLButtonElement>
    button.trigger('click')
    expect(mockAction).toHaveBeenCalledOnce()
  })
})
