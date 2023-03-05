import { describe, expect, it } from 'vitest'
import groupBy from '../groupBy'

describe('groupBy', () => {
  it('return capitalized string', () => {
    const testArray = [
      { label: 'One', value: '111' },
      { label: 'One', value: '222' },
      { label: 'Two', value: '333' }
    ]
    const result = groupBy(testArray, 'label')
    expect(result).toStrictEqual({
      One: [
        {
          label: 'One',
          value: '111'
        },
        {
          label: 'One',
          value: '222'
        }
      ],
      Two: [
        {
          label: 'Two',
          value: '333'
        }
      ]
    })
  })
})
