import { OptionGroup, Option } from './lib/others'
import { PasswordPayload } from './lib/validators'

// Dates
export declare function calculateAge(birthDate: Date | string): string
export declare function convertDateFormat(date: string): string

// Formats
export declare function formatReal(amount: number | string): string
export declare function formatRound(value: number): number
export declare function formatDecimal(value: number): string

// Masks
export declare function cpfOrCnpjMask(value: string): string
export declare function brazilianZipcodeMask(value: string): string
export declare function brazilianTelephoneMask(value: string): string
export declare function globalCellphoneMask(
  country: string,
  phoneNumber: string
): string
export declare function clearMask(value: string): string

// Normalize
export declare function normalizeName(name: string): string
export declare function arrayToStringWithQuotes(items: string[]): string

// Others
export declare function base64Encoding(str: string): string
export declare function base64Decoding(base64: string): string
export declare function generateRandomNumber(min: number, max: number): number
export declare function generateRandomString(min: number, max: number): string
export declare function generateRange(quantity: number): number[]
export declare function createSlug(name: string): string
export declare function limitString(
  text: string,
  limit: number,
  addEllpsis: boolean
): string
export declare function findLowestValue(optionGroup: OptionGroup): Option | null
export declare function generateTimeSlots(): {
  index: number
  key: string
  value: number
}[]
export declare function createFirstAndLastName(name: string): string
export declare function calculateDistanceInKm(distance: number): number
export declare function isEmptyObject(obj: object): boolean
export declare function roundToTwo(num: number): number
export declare function findMax(arr: number[]): number
export declare function findMin(arr: number[]): number
export declare function removeDuplicates<T>(arr: T[]): T[]
export declare function capitalizeWords(str: string): string

// Validators
export declare function brazilianCpfValidator(value: string): boolean
export declare function brazilianCnpjValidator(value: string): boolean
export declare function emailIsValid(email: string): boolean
export declare function nameIsValid(name: string): boolean
export declare function fullnameIsValid(name: string): boolean
export declare function validNameAndLastName(name: string): boolean
export declare function brazilianTelephoneValidator(telephone: string): boolean
export declare function birthdateIs18Plus(
  birthday: string,
  allowMinors: boolean
): boolean
export declare function passwordStrongValidator(
  password: string
): PasswordPayload

// Diacritics
export declare function clean(input: string): string
