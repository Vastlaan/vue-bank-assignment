import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import ButtonToggle from '../ButtonToggle.vue'
import type { ButtonToggleProps } from '../ButtonToggle.vue'
import findByText from '@/utils/test/findByText'

const mockAction = vi.fn()

const defaultProps: ButtonToggleProps = {
  action: mockAction,
  title: 'Toggle me'
}

const getWrapper = () =>
  mount(ButtonToggle, {
    props: defaultProps
  })
describe('HeadingLarge', () => {
  it('properly display and call the action', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toBe('Toggle me')

    const button = (await findByText(
      wrapper,
      'button',
      'Toggle me'
    )) as DOMWrapper<HTMLButtonElement>

    button.trigger('click')
    expect(mockAction).toHaveBeenCalledOnce()
  })
})
