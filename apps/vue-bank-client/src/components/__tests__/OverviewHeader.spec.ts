import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import OverviewHeader from '../OverviewHeader.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(OverviewHeader, {
    global: {
      plugins: [router]
    }
  })
describe('OverviewHeader', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly and navigates to /account', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Welcome M. Antczak')
    expect(wrapper.text()).toContain('Contact')

    const anchor = (await findByText(wrapper, 'a', 'Contact')) as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/contact')
  })
})
