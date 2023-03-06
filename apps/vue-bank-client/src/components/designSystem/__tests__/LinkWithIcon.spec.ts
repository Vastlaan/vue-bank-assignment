import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import LinkWithIcon from '../LinkWithIcon.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import findByText from '@/utils/test/findByText'
import type { LinkWithIconProps } from '../LinkWithIcon.vue'

library.add(faHome)

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const defaultProps: LinkWithIconProps = {
  to: '/',
  name: 'Home',
  icon: 'fa-home',
  applyActiveClass: true
}

const getWrapper = (mockProps?: LinkWithIconProps) =>
  mount(LinkWithIcon, {
    props: mockProps || defaultProps,
    global: {
      plugins: [router],
      stubs: { FontAwesomeIcon }
    }
  })
describe('LinkWithIcon', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders properly with icon and active class', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('svg')).toBeTruthy()
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.classes()).toContain('active')
  })

  it('renders properly without icon and without active class', () => {
    const wrapper = getWrapper({
      to: '/',
      name: 'Home'
    })
    expect(() => wrapper.get('svg'))
      .to.throw()
      .with.property('message')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.classes()).not.toContain('active')
  })

  it('properly navigates to settings', async () => {
    const push = vi.spyOn(router, 'push')
    const wrapper = getWrapper({
      to: '/settings',
      name: 'Settings',
      icon: 'fa-home',
      applyActiveClass: true
    })
    const settings = findByText(wrapper, 'a', 'Settings') as DOMWrapper<HTMLAnchorElement>
    settings.trigger('click')
    expect(push).toHaveBeenCalledWith('/settings')
  })
})
