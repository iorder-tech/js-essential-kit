import { isEmpty, isNotEmpty } from '../lib/utils/arraysUtils'

describe('isEmpty', () => {
  test('Returns true if array is empty', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('Returns true if array is undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  test('Returns false if array is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })
  test('Returns false if array contains only undefined values', () => {
    expect(isEmpty([undefined, undefined])).toBe(false)
  })
  test('Returns false if array contains only null values', () => {
    expect(isEmpty([null, null])).toBe(false)
  })
  test('Returns false if array contains only empty strings', () => {
    expect(isEmpty(['', ''])).toBe(false)
  })
  test('Returns false if array contains only whitespace strings', () => {
    expect(isEmpty([' ', ' '])).toBe(false)
  })
  test('Returns false if array contains only empty objects', () => {
    expect(isEmpty([{}, {}])).toBe(false)
  })
  test('Returns false if array contains only empty arrays', () => {
    expect(isEmpty([[], []])).toBe(false)
  })
})

describe('isNotEmpty', () => {
  test('Returns true if array is not empty', () => {
    expect(isNotEmpty([1, 2, 3])).toBe(true)
  })
  test('Returns false if array is empty', () => {
    expect(isNotEmpty([])).toBe(false)
  })
  test('Returns false if array is undefined', () => {
    expect(isNotEmpty(undefined)).toBe(false)
  })
  test('Returns true if array contains only undefined values', () => {
    expect(isNotEmpty([undefined, undefined])).toBe(true)
  })
  test('Returns true if array contains only whitespace strings', () => {
    expect(isNotEmpty([' ', ' '])).toBe(true)
  })
  test('Returns true if array contains only empty arrays', () => {
    expect(isNotEmpty([[], []])).toBe(true)
  })
})