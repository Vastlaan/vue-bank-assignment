import { describe, expect, it } from 'vitest'
import capitalizeFirstLetter from '../capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('return capitalized string', () => {
    const testString = 'this is lower case'
    const result = capitalizeFirstLetter(testString)
    expect(result).toBe('This is lower case')
  })
})
