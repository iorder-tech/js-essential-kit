import { normalizeString } from '../lib/normalize'
import { formatReal, formatRound, formatDecimal } from '../lib/formats'

describe('formatReal', () => {
  test('Format number to BRL currency', () => {
    expect(normalizeString(formatReal(1234.56))).toEqual('R$ 1.234,56')
  })

  test('Format string to BRL currency', () => {
    expect(normalizeString(formatReal('1234.56'))).toEqual('R$ 1.234,56')
  })

  test('Handle undefined input', () => {
    expect(normalizeString(formatReal())).toEqual('R$ 0,00')
  })

  test('Handle zero input', () => {
    expect(normalizeString(formatReal(0))).toEqual('R$ 0,00')
  })

  test('Handle negative input', () => {
    expect(normalizeString(formatReal(-1234.56))).toEqual('-R$ 1.234,56')
  })
})

describe('formatRound', () => {
  test('Round a number', () => {
    expect(formatRound(4.567)).toBe(5)
  })

  test('Round a number down', () => {
    expect(formatRound(4.3)).toBe(4)
  })

  test('Handle special case of -1', () => {
    expect(formatRound(-1)).toBe(0)
  })

  test('Round zero', () => {
    expect(formatRound(0)).toBe(0)
  })

  test('Round negative number', () => {
    expect(formatRound(-4.567)).toBe(-5)
  })
})

describe('formatDecimal', () => {
  test('Format a number to two decimal places', () => {
    expect(formatDecimal(1234.56)).toBe('1234,56')
  })

  test('Format a number with more than two decimal places', () => {
    expect(formatDecimal(1234.5678)).toBe('1234,57')
  })

  test('Format a number with less than two decimal places', () => {
    expect(formatDecimal(1234.5)).toBe('1234,50')
  })

  test('Handle special case of -1', () => {
    expect(formatDecimal(-1)).toBe('0,00')
  })

  test('Handle zero input', () => {
    expect(formatDecimal(0)).toBe('0,00')
  })
})
