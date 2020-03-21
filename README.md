# Mailchain Tools JS

This package is Mailchain Tools - useful tools and functions for working with the Mailchain API

## Installing

```sh
npm install @mailchain/tools-js
```

## Usage

In your app, import the module:

```js
const mctools = require('@mailchain/tools-js')

```

## Methods

### parseAddressFromMailchain

Parses an address in Mailchain form and returns the public address
@param address an address e.g. `<0x0000000000000000000000000000000000000000@network.chainname>`

Code Example:

```js
const mctools = require('@mailchain/tools-js')

let parsedAddress = mctools.parseAddressFromMailchain('<0x0000000000000000000000000000000000000000@network.chainname>')
console.log(parsedAddress) // returns '0x0000000000000000000000000000000000000000'
```

### validateEnsName

tests the value matches the ENS Name Regex
@param value is the ens name value to test, e.g. alice.eth, alice.xyz
Code Example:

```js
const mctools = require('@mailchain/tools-js')

let validateEnsName = mctools.validateEnsName('alice.eth')
console.log(validateEnsName) // returns true
```

### validateEthAddress

Tests the value matches the Eth Address Regex
@param value the address value to test, e.g. 0x000...
expects '0x' + 40 hex chars

Code Example:

```js
const mctools = require('@mailchain/tools-js')

let validateEthAddress = mctools.validateEthAddress('0x0000000000000000000000000000000000000000')
console.log(validateEthAddress) // returns true
```
