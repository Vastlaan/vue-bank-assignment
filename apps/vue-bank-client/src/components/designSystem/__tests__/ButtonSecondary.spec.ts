import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import ButtonSecondary from '../ButtonSecondary.vue'
import type { ButtonSecondaryProps } from '../ButtonSecondary.vue'
import findByText from '@/utils/test/findByText'

const defaultProps: ButtonSecondaryProps = {
  action: { url: '/settings' },
  title: 'Go to settings'
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = (mockProps?: ButtonSecondaryProps) =>
  mount(ButtonSecondary, {
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
    expect(wrapper.text()).toBe('Go to settings')

    const anchor = findByText(wrapper, 'a', 'Go to settings') as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/settings')
  })

  it('properly calls action', async () => {
    const callback = vi.fn()

    const mockProps: ButtonSecondaryProps = {
      action: { callback: callback },
      title: 'Call me'
    }

    const wrapper = getWrapper(mockProps)
    expect(wrapper.text()).toBe('Call me')

    const button = findByText(wrapper, 'button', 'Call me') as DOMWrapper<HTMLButtonElement>
    button.trigger('click')
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
