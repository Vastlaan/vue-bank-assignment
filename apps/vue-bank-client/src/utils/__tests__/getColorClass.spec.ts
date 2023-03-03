import { describe, expect, it } from 'vitest'
import getColorClass from '../getColorClass'

describe('getColorClass', () => {
  it('properly returns white color class', () => {
    const result = getColorClass('white')
    expect(result.value).toEqual('color-white')
  })
  it('properly returns primary color class', () => {
    const result = getColorClass('primary')
    expect(result.value).toEqual('color-primary')
  })
  it('properly returns secondary color class', () => {
    const result = getColorClass('secondary')
    expect(result.value).toEqual('color-secondary')
  })
  it('properly returns error color class', () => {
    const result = getColorClass('error')
    expect(result.value).toEqual('color-error')
  })
})
