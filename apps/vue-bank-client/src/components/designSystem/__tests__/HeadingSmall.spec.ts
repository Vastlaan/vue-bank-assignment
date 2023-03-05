import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeadingSmall from '../HeadingSmall.vue'
import type { HeadingProps } from '../HeadingSmall.vue'

const defaultProps: HeadingProps = {
  text: 'Some Heading'
}

const getWrapper = (mockProps?: HeadingProps) =>
  mount(HeadingSmall, {
    props: mockProps || defaultProps
  })
describe('HeadingSmall', () => {
  it('renders properly', () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toBe('Some Heading')
  })
  it('properly appends color class', () => {
    const wrapper = getWrapper({
      text: 'Some Heading',
      color: 'primary'
    })
    expect(wrapper.text()).toBe('Some Heading')
    expect(wrapper.classes()).toContain('color-primary')
  })
})
