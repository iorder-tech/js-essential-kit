import { normalizeName, arrayToStringWithQuotes } from '../lib/normalize'

describe('normalizeName', () => {
  test('normalize a name with mixed cases', () => {
    expect(normalizeName('john DOE')).toBe('John Doe')
  })

  test('normalize a name with extra spaces', () => {
    expect(normalizeName('  alice   SMITH  ')).toBe('Alice Smith')
  })
})

describe('arrayToStringWithQuotes', () => {
  test('convert an array of strings to quoted string', () => {
    expect(arrayToStringWithQuotes(['apple', 'banana', 'cherry'])).toBe(
      '"apple", "banana", "cherry"'
    )
  })
})
