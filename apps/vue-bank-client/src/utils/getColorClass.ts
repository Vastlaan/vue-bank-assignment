import { computed } from 'vue'

export type Color = 'primary' | 'white' | 'secondary' | 'error' | 'primaryDark' | undefined

export default function getColorClass(color: Color) {
  return computed(() => {
    switch (color) {
      case 'primary':
        return 'color-primary'
      case 'primaryDark':
        return 'color-primary-dark'
      case 'secondary':
        return 'color-secondary'
      case 'white':
        return 'color-white'
      case 'error':
        return 'color-error'
      default:
        return undefined
    }
  })
}
