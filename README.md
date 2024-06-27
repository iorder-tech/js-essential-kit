# Utility JavaScript Functions Library 📚

Welcome to the Utility JavaScript Functions Library! This library provides a comprehensive set of utility functions for various common tasks, including date calculations, formatting, masking, normalizing data, and validation. Each function is designed to make your development process easier and more efficient.

## Table of Contents

- [Dates](#dates)
- [Formats](#formats)
- [Masks](#masks)
- [Normalize](#normalize)
- [Validators](#validators)
- [Others](#others)

## Getting Started ✈️

if using npm:

```
$ npm install js-helper-kit --save
```

if using yarn:

```
$ yarn add js-helper-kit
```

if using pnpm:

```
$ pnpm install js-helper-kit
```

## Dates

### Calculate Age

- Calculates the age based on the given birth date.

```js
import { calculateAge } from 'js-helper-kit'

calculateAge('2000-01-01') // Ex: 23 anos
```

### Convert Date Format

- Converts a date string to a different format.
 
```js
import { convertDateFormat } from 'js-helper-kit'

convertDateFormat('2024-06-26') // Ex: '26/06/2024'
convertDateFormat('26/06/2024') // Ex: '2024-06-26'
```

## Formats

### Format Real
- **`formatReal(amount: number | string): string`**

- Formats a number or string as Brazilian Real currency.

```js
import { formatReal } from 'js-helper-kit'

formatReal(1234.56) // Ex: 'R$ 1.234,56'
```

### Format Round

- Rounds a number to the nearest integer.

```js
import { formatRound } from 'js-helper-kit'

formatRound(4.567) // Ex: 5
```

### Format Decimal

- Formats a number to two decimal places.

```js
import { formatDecimal } from 'js-helper-kit'

formatDecimal(1234.56) // Ex: '1234,56'
```

## Masks

### CPF or CNPJ Mask

- Applies CPF or CNPJ mask to a string.

```js
import { cpfOrCnpjMask } from 'js-helper-kit'

cpfOrCnpjMask('12345678909')) // Ex CPF: '123.456.789-09'
cpfOrCnpjMask('68451802000151')) // EX CNPJ: '68.451.802/0001-51'
```

### Brazilian Zipcode Mask

- Applies Brazilian zipcode mask to a string.

```js
import { brazilianZipcodeMask } from 'js-helper-kit'

brazilianZipcodeMask('12345678') // Ex: '12345-678'
```

### Brazilian Telephone Mask

- Applies Brazilian telephone mask to a string.

```js
import { brazilianTelephoneMask } from 'js-helper-kit'

brazilianTelephoneMask('21987654321') // Ex: '(21) 98765-4321'
```

### Global Cellphone Mask

- Applies a global cellphone mask based on country.

```js
import { globalCellphoneMask } from 'js-helper-kit'

globalCellphoneMask('US', '1234567890') // Ex: '+1 (123) 456-7890'
```

### Clear Mask

- Clears any mask from a string.

```js
import { clearMask } from 'js-helper-kit'

clearMask('123.456.789-09')) // Ex: '12345678909'
```

## Normalize

### Normalize Name

- Normalizes a name string.

```js
import { normalizeName } from 'js-helper-kit'

normalizeName(' João da Silva ') // Ex: 'João Da Silva'
```

### Array to String with Quotes

- Converts an array of strings to a single string with each item in quotes.

```js
import { arrayToStringWithQuotes } from 'js-helper-kit'

arrayToStringWithQuotes(['apple', 'banana', 'cherry']) // Ex: '"apple", "banana", "cherry"'
```

## Others

### Base64 Encoding

- Encodes a string in base64.

```js
import { base64Encoding } from 'js-helper-kit'

base64Encoding('Hello, World!') // Ex: 'SGVsbG8sIFdvcmxkIQ=='
```

### Base64 Deconding

- Decodes a base64 string.

```js
import { base64Decoding } from 'js-helper-kit'

base64Decoding('SGVsbG8sIFdvcmxkIQ==') // Ex: 'Hello, World!'
```

### Generate Random Number

- Generates a random number between min and max.

```js
import { generateRandomNumber } from 'js-helper-kit'

generateRandomNumber(1, 10) // Ex: 7
```

### Generate Random String

- Generates a random string of specified length.

```js
import { generateRandomString } from 'js-helper-kit'

generateRandomString(5, 10) // Ex: 'aBcDeF'
```

### Generate Range

- Generates an array of numbers from 0 to quantity-1.

```js
import { generateRange } from 'js-helper-kit'

generateRange(5) // Ex: [1, 2, 3, 4, 5]
```

### Create Slug

- Creates a URL-friendly slug from a string.

```js
import { createSlug } from 'js-helper-kit'

createSlug('Olá Mundo!') // 'ola-mundo'
```

### Limit String

- Limits the length of a string, optionally adding ellipsis.

```js
import { limitString } from 'js-helper-kit'

// Limits a string to the specified length, optionally adding an ellipsis.
limitString('Hello World', 10, true)) // Ex: 'Hello W...'
```

### Find LowestValue

- Finds the lowest value in an option group.

```js
import { findLowestValue } from 'js-helper-kit'

const options = {
  options: [
    { value: '10' },
    { value: '5' },
    { value: '20' }
  ]
}

findLowestValue(options) // Ex: { value: '5' }
```

### Generate Time Slots

- Generates a set of time slots.

```js
import { generateTimeSlots } from 'js-helper-kit'

generateTimeSlots()

/* [
  { index: 0, key: '00:00 - 02:00', value: 0 },
  { index: 1, key: '02:00 - 04:00', value: 0 },
  ...,
  { index: 11, key: '22:00 - 00:00', value: 0 }
] */
```

### Create First And Lastname

- Splits a full name into first and last name.

```js
import { createFirstAndLastName } from 'js-helper-kit'

createFirstAndLastName('John Michael Doe') // Ex: 'John Michael'
```

### Calculate Distance In KM

- Calculates the distance in kilometers.

```js
import { calculateDistanceInKm } from 'js-helper-kit'

calculateDistanceInKm(1500) // Ex: 1.5
```

### Is Empty Object

- Checks if an object is empty.

```js
import { isEmptyObject } from 'js-helper-kit'

isEmptyObject({}) // Ex: true
```

### Round To Two

- Rounds a number to two decimal places.

```js
import { roundToTwo } from 'js-helper-kit'

roundToTwo(123.456) // Ex: 123.46
```

### Find Max

- Finds the maximum value in an array.

```js
import { findMax } from 'js-helper-kit'

findMax([1, 2, 3, 4, 5]) // Ex: 5
```

### Find Min

- Finds the minimum value in an array.

```js
import { findMin } from 'js-helper-kit'

findMin([1, 2, 3, 4, 5]) // Ex: 1
```

### Remove Duplicates

- Removes duplicate values from an array.

```js
import { removeDuplicates } from 'js-helper-kit'

removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // Ex: [1, 2, 3, 4, 5]
```

### Capitalize Words

- Capitalizes the first letter of each word in a string.

```js
import { capitalizeWords } from 'js-helper-kit'

capitalizeWords('hello world') // Ex: 'Hello World'
```

## Validators

### BrazilianCpfValidator

- Validates a Brazilian CPF.

```js
import { brazilianCpfValidator } from 'js-helper-kit'

brazilianCpfValidator('123.456.789-09') // Ex: true ou false
```

### Brazilian CNPJ Validator

- Validates a Brazilian CNPJ.

```js
import { brazilianCnpjValidator } from 'js-helper-kit'

brazilianCnpjValidator('12.345.678/0001-95') // Ex: true ou false
```

### Email Is Valid

- Validates an email address.

```js
import { emailIsValid } from 'js-helper-kit'

emailIsValid('example@example.com') // Ex: true ou false
```

### Name Is Valid

- Validates a name string.

```js
import { nameIsValid } from 'js-helper-kit'

nameIsValid('John Doe') // Ex: true ou false
```

### Fullname Is Valid

- Validates a full name string.

```js
import { fullnameIsValid } from 'js-helper-kit'

fullnameIsValid('John Doe') // Ex: { valid: true, message: '' }
fullnameIsValid('John  Doe') // Ex: { valid: false, message: 'No extra spaces allowed' }
```

### Valid Name And Lastname

- Validates a name with last name.

```js
import { validNameAndLastName } from 'js-helper-kit'

validNameAndLastName('John Doe') // Ex: true ou false
```

### Brazilian TelephoneValidator

- Validates a Brazilian telephone number.

```js
import { brazilianTelephoneValidator } from 'js-helper-kit'

brazilianTelephoneValidator('(21) 98765-4321') // Ex: true ou false
```

### Birthdate Is 18 Plus

- Checks if the birthdate is 18 years or older, with an option to allow minors.

```js
import { birthdateIs18Plus } from 'js-helper-kit'

birthdateIs18Plus('2000-01-01', false)) // Ex: true ou false
```

### Password Strong Validator

- Validates the strength of a password.

```js
import { passwordStrongValidator } from 'js-helper-kit'

passwordStrongValidator('StrongP@ssword1')
// Ex: { passwordIsValid: true }

passwordStrongValidator('weak')
// Ex: { passwordIsValid: false, errors: ['passwordLength', 'noNumber', 'noUpperCaseLetter', 'noLowerCaseLetter'] }
```

---

<!-- CONTRIBUTING -->

## Contribution

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contribution you make will be **much appreciated**.

1. Fork the project
2. Create a Branch for your Feature (`git checkout -b feature/newFeature`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Add new feature!`)
5. Push the Branch (`git push origin feature/newFeature`)
6. Open a Pull Request

Feel free to contribute to this project or suggest new features. Happy coding! 😊

---

### Contributors

| [<img src="https://avatars0.githubusercontent.com/u/39813875?s=460&v=4" width=115 > <br> <sub> Julio Sousa </sub>](https://github.com/JulioAugustoS) | 
| :---: |

---

## Licence

The [Apache 2.0]() (APACHE 2.0)
