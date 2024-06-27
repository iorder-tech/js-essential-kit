import {
  base64Encoding,
  base64Decoding,
  generateRandomNumber,
  generateRandomString,
  generateRange,
  createSlug,
  limitString,
  findLowestValue,
  generateTimeSlots,
  createFirstAndLastName,
  calculateDistanceInKm,
  isEmptyObject,
  roundToTwo,
  findMax,
  findMin,
  removeDuplicates,
  capitalizeWords,
  OptionGroup,
} from '../lib/others'

describe('base64Encoding', () => {
  test('Encodes string to base64', () => {
    expect(base64Encoding('Hello, World!')).toBe('SGVsbG8sIFdvcmxkIQ==')
  })
})

describe('base64Decoding', () => {
  test('Decodes base64 string to original', () => {
    expect(base64Decoding('SGVsbG8sIFdvcmxkIQ==')).toBe('Hello, World!')
  })
})

describe('generateRandomNumber', () => {
  test('Generates a random number within the specified range', () => {
    const num = generateRandomNumber(1, 10)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(10)
  })
})

describe('generateRandomString', () => {
  test('Generates a random string within the specified length range', () => {
    const str = generateRandomString(5, 10)
    expect(str.length).toBeGreaterThanOrEqual(5)
    expect(str.length).toBeLessThanOrEqual(10)
  })
})

describe('generateRange', () => {
  test('Generates an array of numbers with the specified quantity', () => {
    const range = generateRange(5)
    expect(range).toHaveLength(5)
    expect(range).toEqual([1, 2, 3, 4, 5])
  })
})

describe('createSlug', () => {
  test('Creates a slug from string', () => {
    expect(createSlug('Hello World!')).toBe('hello-world')
  })

  test('Creates a slug from string with diacritics', () => {
    expect(createSlug('Olá Mundo!')).toBe('ola-mundo')
  })
})

describe('limitString', () => {
  test('Limits string to specified length', () => {
    expect(limitString('Hello World', 10)).toBe('Hello Worl')
  })

  test('Limits string to specified length with ellipsis', () => {
    expect(limitString('Hello World', 10, true)).toBe('Hello W...')
  })

  test('Returns original string if shorter than limit', () => {
    expect(limitString('Hello', 10)).toBe('Hello')
  })
})

describe('findLowestValue', () => {
  const options: OptionGroup = {
    options: [{ value: '10' }, { value: '5' }, { value: '20' }],
  }

  test('Finds the option with the lowest value', () => {
    expect(findLowestValue(options)).toEqual({ value: '5' })
  })

  test('Returns null for empty option group', () => {
    expect(findLowestValue({ options: [] })).toBeNull()
  })
})

describe('generateTimeSlots', () => {
  test('Generates an array of time slots', () => {
    expect(generateTimeSlots()).toEqual([
      { index: 0, key: '00:00 - 02:00', value: 0 },
      { index: 1, key: '02:00 - 04:00', value: 0 },
      { index: 2, key: '04:00 - 06:00', value: 0 },
      { index: 3, key: '06:00 - 08:00', value: 0 },
      { index: 4, key: '08:00 - 10:00', value: 0 },
      { index: 5, key: '10:00 - 12:00', value: 0 },
      { index: 6, key: '12:00 - 14:00', value: 0 },
      { index: 7, key: '14:00 - 16:00', value: 0 },
      { index: 8, key: '16:00 - 18:00', value: 0 },
      { index: 9, key: '18:00 - 20:00', value: 0 },
      { index: 10, key: '20:00 - 22:00', value: 0 },
      { index: 11, key: '22:00 - 00:00', value: 0 },
    ])
  })
})

describe('createFirstAndLastName', () => {
  test('Extracts first and last name', () => {
    expect(createFirstAndLastName('John Michael Doe')).toBe('John Michael')
  })

  test('Returns single name if only one word', () => {
    expect(createFirstAndLastName('John')).toBe('John')
  })

  test('Returns empty string for empty input', () => {
    expect(createFirstAndLastName('')).toBe('')
  })
})

describe('calculateDistanceInKm', () => {
  test('Converts distance from meters to kilometers', () => {
    expect(calculateDistanceInKm(1500)).toBe(1.5)
  })
})

describe('isEmptyObject', () => {
  test('Checks if object is empty', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  test('Checks if object is not empty', () => {
    expect(isEmptyObject({ key: 'value' })).toBe(false)
  })
})

describe('roundToTwo', () => {
  test('Rounds a number to two decimal places', () => {
    expect(roundToTwo(1234.567)).toBe(1234.57)
  })
})

describe('findMax', () => {
  test('Finds the maximum value in an array', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5)
  })
})

describe('findMin', () => {
  test('Finds the minimum value in an array', () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1)
  })
})

describe('removeDuplicates', () => {
  test('Removes duplicates from an array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})

describe('capitalizeWords', () => {
  test('Capitalizes the first letter of each word in a string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World')
  })
})
