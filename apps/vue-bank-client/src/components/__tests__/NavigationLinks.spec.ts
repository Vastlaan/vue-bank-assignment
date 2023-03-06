import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import NavigationLinks from '../NavigationLinks.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(NavigationLinks, {
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('NavigationLinks', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly', () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Accounts')
    expect(wrapper.text()).toContain('Settings')
    expect(wrapper.text()).toContain('Contact')
  })
  it('properly navigates to settings', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    const settings = findByText(wrapper, 'a', 'Settings') as DOMWrapper<HTMLAnchorElement>
    settings.trigger('click')
    expect(push).toHaveBeenCalledWith('/settings')
  })
})
