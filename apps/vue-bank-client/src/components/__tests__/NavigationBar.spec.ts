import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationBar from '../NavigationBar.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getWrapper = () =>
  mount(NavigationBar, {
    global: {
      plugins: [router],
      stubs: ['FontAwesomeIcon']
    }
  })
describe('NavigationBar', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly all the links and logo', () => {
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain('Settings')
    expect(wrapper.text()).toContain('Contact')
    expect(wrapper.text()).toContain('VueBank')
    expect(wrapper.text()).toContain('Accounts')
  })
})
