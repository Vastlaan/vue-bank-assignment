import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorMessageVue from '../ErrorMessage.vue'

const defaultProps: { message: string } = {
  message: 'An error message'
}

const getWrapper = () =>
  mount(ErrorMessageVue, {
    props: defaultProps
  })

describe('ErrorMessage', () => {
  it('properly displays', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toBe('An error message')
    expect(wrapper.find('[data-testid="icon"]')).toBeTruthy()
  })
})
