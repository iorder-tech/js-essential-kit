/**
 * Formats a given amount as Brazilian Real currency.
 *
 * This function takes a number or a string that can be parsed to a number,
 * formats it to two decimal places, and converts it to Brazilian Real currency format.
 *
 * @param {number | string} [amount=0] - The amount to be formatted. Defaults to 0 if not provided.
 * @returns {string} - The formatted currency string in Brazilian Real.
 *
 * @example
 * // Format number to BRL currency
 * console.log(formatReal(1234.56)); // 'R$ 1.234,56'
 *
 * // Format string to BRL currency
 * console.log(formatReal('1234.56')); // 'R$ 1.234,56'
 *
 * // Handle undefined input
 * console.log(formatReal()); // 'R$ 0,00'
 */
export const formatReal = (amount: number | string = 0): string => {
  const number = Number(amount) || 0
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Rounds the given number to the nearest integer.
 *
 * This function rounds the given number to the nearest integer. If the value is -1,
 * it returns 0.
 *
 * @param {number} value - The number to be rounded.
 * @returns {number} - The rounded number or 0 if the input is -1.
 *
 * @example
 * // Round a number
 * console.log(formatRound(4.567)); // 5
 *
 * // Handle special case of -1
 * console.log(formatRound(-1)); // 0
 */
export const formatRound = (value: number): number => {
  if (value === -1) {
    return 0
  }

  return Math.round(value)
}

/**
 * Formats the given number to a string with two decimal places.
 *
 * This function formats the given number to a string with two decimal places, replacing
 * the decimal point with a comma. If the value is -1, it returns "0,00".
 *
 * @param {number} value - The number to be formatted.
 * @returns {string} - The formatted number as a string with two decimal places.
 *
 * @example
 * // Format a number to two decimal places
 * console.log(formatDecimal(1234.56)); // "1234,56"
 *
 * // Handle special case of -1
 * console.log(formatDecimal(-1)); // "0,00"
 */
export const formatDecimal = (value: number): string => {
  if (value === -1) {
    return '0,00'
  }

  return value.toFixed(2).replace('.', ',')
}
