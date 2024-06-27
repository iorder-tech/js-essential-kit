# Utility Functions Library 📚

Welcome to the Utility Functions Library! This library provides a comprehensive set of utility functions for various common tasks, including date calculations, formatting, masking, normalizing data, and validation. Each function is designed to make your development process easier and more efficient.

## Table of Contents

- [Dates](#dates)
- [Formats](#formats)
- [Masks](#masks)
- [Normalize](#normalize)
- [Others](#others)
- [Validators](#validators)

## Dates

- **`calculateAge(birthDate: Date | string): string`**

  - Calculates the age based on the given birth date.

- **`convertDateFormat(date: string): string`**
  - Converts a date string to a different format.

## Formats

- **`formatReal(amount: number | string): string`**

  - Formats a number or string as Brazilian Real currency.

- **`formatRound(value: number): number`**

  - Rounds a number to the nearest integer.

- **`formatDecimal(value: number): string`**
  - Formats a number to two decimal places.

## Masks

- **`cpfOrCnpjMask(value: string): string`**

  - Applies CPF or CNPJ mask to a string.

- **`brazilianZipcodeMask(value: string): string`**

  - Applies Brazilian zipcode mask to a string.

- **`brasilianTelephoneMask(value: string): string`**

  - Applies Brazilian telephone mask to a string.

- **`globalCellphoneMask(country: string, phoneNumber: string): string`**

  - Applies a global cellphone mask based on country.

- **`clearMask(value: string): string`**
  - Clears any mask from a string.

## Normalize

- **`normalizeName(name: string): string`**

  - Normalizes a name string.

- **`arrayToStringWithQuotes(items: string[]): string`**
  - Converts an array of strings to a single string with each item in quotes.

## Others

- **`base64Encoding(str: string): string`**

  - Encodes a string in base64.

- **`base64Decoding(base64: string): string`**

  - Decodes a base64 string.

- **`generateRandomNumber(min: number, max: number): number`**

  - Generates a random number between min and max.

- **`generateRandomString(min: number, max: number): string`**

  - Generates a random string of specified length.

- **`generateRange(quantity: number): number[]`**

  - Generates an array of numbers from 0 to quantity-1.

- **`createSlug(name: string): string`**

  - Creates a URL-friendly slug from a string.

- **`limitString(text: string, limit: number, addEllipsis: boolean): string`**

  - Limits the length of a string, optionally adding ellipsis.

- **`findLowestValue(optionGroup: OptionGroup): Option | null`**

  - Finds the lowest value in an option group.

- **`generateTimeSlots(): { index: number, key: string, value: number }[]`**

  - Generates a set of time slots.

- **`createFirstAndLastName(name: string): string`**

  - Splits a full name into first and last name.

- **`calculateDistanceInKm(distance: number): number`**

  - Calculates the distance in kilometers.

- **`isEmptyObject(obj: object): boolean`**

  - Checks if an object is empty.

- **`roundToTwo(num: number): number`**

  - Rounds a number to two decimal places.

- **`findMax(arr: number[]): number`**

  - Finds the maximum value in an array.

- **`findMin(arr: number[]): number`**

  - Finds the minimum value in an array.

- **`removeDuplicates<T>(arr: Array<T>): Array<T`**

  - Removes duplicate values from an array.

- **`capitalizeWords(str: string): string`**
  - Capitalizes the first letter of each word in a string.

## Validators

- **`brazilianCpfValidator(value: string): boolean`**

  - Validates a Brazilian CPF.

- **`brazilianCnpjValidator(value: string): boolean`**

  - Validates a Brazilian CNPJ.

- **`emailIsValid(email: string): boolean`**

  - Validates an email address.

- **`nameIsValid(name: string): boolean`**

  - Validates a name string.

- **`fullnameIsValid(name: string): boolean`**

  - Validates a full name string.

- **`validNameAndLastName(name: string): boolean`**

  - Validates a name with last name.

- **`brazilianTelephoneValidator(telephone: string): boolean`**

  - Validates a Brazilian telephone number.

- **`birthdateIs18Plus(birthday: string, allowMinors: boolean): boolean`**

  - Checks if the birthdate is 18 years or older, with an option to allow minors.

- **`passwordStrongValidator(password: string): PasswordPayload`**
  - Validates the strength of a password.

---

Feel free to contribute to this project or suggest new features. Happy coding! 😊
