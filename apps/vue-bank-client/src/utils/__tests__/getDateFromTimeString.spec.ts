import { describe, expect, it } from 'vitest'
import getDateFromTimeString from '../getDateFromTimeString'

describe('getDateFromTimeString', () => {
  it('return properly formated date', () => {
    const testTimeString = '2020-12-29T22:00:00Z'
    const result = getDateFromTimeString(testTimeString)
    expect(result.value).toBe('dinsdag 29 december 2020 om 23:00:00')
  })
})
