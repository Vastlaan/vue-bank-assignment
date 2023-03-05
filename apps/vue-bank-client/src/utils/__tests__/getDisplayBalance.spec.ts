import { describe, expect, it } from 'vitest'
import getDisplayBalance from '../getDisplayBalance'

describe('getDisplayBalance', () => {
  it('return capitalized string', () => {
    const balance = 45.3
    const currencyCode = 'EUR'
    const result = getDisplayBalance({ balance, currencyCode })
    expect(result.value).toBe('€ 45.30')
  })
})
