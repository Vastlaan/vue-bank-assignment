import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AppLogo from '../AppLogo.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "@/router"

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const getWrapper = () => mount(AppLogo, {
  global: {
    plugins: [router]
  }
});
describe('AppLogo', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  });

  it('renders properly', () => {
    const wrapper = getWrapper()
    expect(wrapper.attributes('aria-label')).toContain('logo')
    expect(wrapper.text()).toBe('VueBank')
  })
  it('properly navigates to home route when clicked', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    await wrapper.find('a').trigger('click')
    expect(push).toHaveBeenCalledWith('/')
  })
})
