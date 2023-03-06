import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import HeaderPrimary from '../HeaderPrimary.vue'
import type { HeaderPrimaryProps } from '../HeaderPrimary.vue'
import findByText from '@/utils/test/findByText'

const defaultProps: HeaderPrimaryProps = {
  action: { url: '/accounts' },
  title: 'This is title',
  description: 'This is the description',
  buttonTitle: 'Go to accounts'
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = (mockProps?: HeaderPrimaryProps) =>
  mount(HeaderPrimary, {
    props: mockProps || defaultProps,
    global: {
      plugins: [router]
    }
  })
describe('HeadingLarge', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('properly navigates to url', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('This is title')
    expect(wrapper.text()).toContain('This is the description')
    expect(wrapper.text()).toContain('Go to accounts')

    const anchor = findByText(wrapper, 'a', 'Go to accounts') as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/accounts')
  })

  it('properly calls action', async () => {
    const callback = vi.fn()

    const mockProps: HeaderPrimaryProps = {
      action: { callback },
      title: 'Another title',
      buttonTitle: 'ButtonTitle',
      description: 'yet another description'
    }

    const wrapper = getWrapper(mockProps)
    expect(wrapper.text()).toContain('Another title')

    const button = findByText(wrapper, 'button', 'ButtonTitle') as DOMWrapper<HTMLAnchorElement>
    button.trigger('click')
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
