import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import HeaderSecondary from '../HeaderSecondary.vue'
import type { HeaderSecondaryProps } from '../HeaderSecondary.vue'
import findByText from '@/utils/test/findByText'

const defaultProps: HeaderSecondaryProps = {
  action: { url: '/accounts' },
  text: 'Some header line',
  buttonTitle: 'Go to accounts'
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = (mockProps?: HeaderSecondaryProps) =>
  mount(HeaderSecondary, {
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
    expect(wrapper.text()).toContain('Some header line')

    const anchor = (await findByText(
      wrapper,
      'a',
      'Go to accounts'
    )) as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/accounts')
  })

  it('properly calls action', async () => {
    const callback = vi.fn()

    const mockProps: HeaderSecondaryProps = {
      action: { callback },
      buttonTitle: 'ButtonTitle',
      text: 'yet another text'
    }

    const wrapper = getWrapper(mockProps)
    expect(wrapper.text()).toContain('yet another text')

    const button = (await findByText(
      wrapper,
      'button',
      'ButtonTitle'
    )) as DOMWrapper<HTMLAnchorElement>
    button.trigger('click')
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
