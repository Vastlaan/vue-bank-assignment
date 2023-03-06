import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../TheFooter.vue'

const getWrapper = () => mount(Footer)
describe('Footer', () => {
  it('renders properly and navigates to /account', async () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain(
      '2023 Michal Antczak. This website has been designed and implemented by Michal Antczak. All rights reserved.'
    )
  })
})
