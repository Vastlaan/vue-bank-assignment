import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoadingSpinner from '../LoadingSpinner.vue'

describe('ErrorMessage', () => {
  it('properly displays', async () => {
    const wrapper = mount(LoadingSpinner, {
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    expect(wrapper.text()).toBe('Please wait ...')
    expect(wrapper.find('[data-testid="icon"]')).toBeTruthy()
  })
})
