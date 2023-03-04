import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import RouterNavigation from '../RouterNavigation.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const defaultProps = {
  url: '/accounts',
  name: 'Go back to Accounts Overview'
}

const getWrapper = () =>
  mount(RouterNavigation, {
    props: defaultProps,
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('RouterNavigation', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Go back to Accounts Overview')
    const link = (await findByText(
      wrapper,
      'a',
      'Go back to Accounts Overview'
    )) as DOMWrapper<HTMLAnchorElement>
    link.trigger('click')
    expect(push).toHaveBeenCalledWith('/accounts')
  })
})
