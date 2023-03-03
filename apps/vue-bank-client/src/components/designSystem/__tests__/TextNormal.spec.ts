import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextNormal from '../TextNormal.vue'
import type { TextProps } from '../TextNormal.vue'

const defaultProps: TextProps = {
  text: 'Some Text'
}

const getWrapper = (mockProps?: TextProps) =>
  mount(TextNormal, {
    props: mockProps || defaultProps
  })
describe('TextNormal', () => {
  it('renders properly', () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toBe('Some Text')
  })
  it('properly appends color class', () => {
    const wrapper = getWrapper({
      text: 'Some Text',
      color: 'primary'
    })
    expect(wrapper.text()).toBe('Some Text')
    expect(wrapper.classes()).toContain('color-primary')
  })
})
