import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import HomeMain from '../HomeMain.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import findByText from '@/utils/test/findByText'
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(HomeMain, {
    global: {
      plugins: [router]
    }
  })
describe('HomeMain', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly and navigates to /account', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain(
      'Manage your accounts via Internet BankingNo need to leave your home.'
    )
    expect(wrapper.text()).toContain('Find out what your options are')
    expect(wrapper.text()).toContain('Accounts')

    const anchor = findByText(wrapper, 'a', 'Accounts') as DOMWrapper<HTMLAnchorElement>
    anchor.trigger('click')
    expect(push).toHaveBeenCalledWith('/accounts')
  })
})
