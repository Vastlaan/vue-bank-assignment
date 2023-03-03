import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import SettingsHeader from '../SettingsHeader.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(SettingsHeader, {
    global: {
      plugins: [router]
    }
  })
describe('SettingsHeader', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly and navigates to /account', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Manage your account preferences')
    expect(wrapper.text()).toContain('Check out your saldo. Log in to your accounts here.')
    expect(wrapper.text()).toContain('Manage accounts')

    const anchor = (await findByText(
      wrapper,
      'a',
      'Manage accounts'
    )) as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/accounts')
  })
})
