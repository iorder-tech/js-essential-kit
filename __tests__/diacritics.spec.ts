import { clean } from '../lib/diacritics'

describe('clean', () => {
  it('should remove diacritics from input string', () => {
    expect(clean('ÁÀÂÃÄ')).toEqual('AAAAA')
  })

  it('should return empty string if input is empty', () => {
    expect(clean('')).toEqual('')
  })

  it('should handle special characters and symbols', () => {
    expect(clean('çéø')).toEqual('ceo')
  })
})
