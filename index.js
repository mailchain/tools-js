
/**
 * Parses an address in Mailchain form and returns public address
 * @param address an address in format '<0x00000000000000000@network.chainname>'
 */
exports.parseAddressFromMailchain = function (address) {
  var regexMailAddr = new RegExp('<0x[0-9a-fA-Z]{40}[@].+>$');
  if (regexMailAddr.test(address)) {
    return address.substr(1, address.indexOf('@') - 1);
  } else {
    return ''
  }
}

/**
 * tests the value matches the ENS Name Regex
 * @param value the ens name value to test, e.g. alice.eth, alice.xyz
 * see tests for conditions 
 */
exports.validateEnsName = function (value) {
  let regex = new RegExp('^([0-9a-zA-Z]{1,}[0-9a-zA-Z\-]{0,}[\.]){1,}[a-zA-Z]{2,}$')
  return regex.test(value)
}


/**
 * tests the value matches the Eth Address Regex
 * @param value the address value to test, e.g. 0x000...
 * expects '0x' + 40 hex chars
 */
exports.validateEthAddress = function (value) {
  let regex = new RegExp('0x[0-9a-fA-F]{40}$');
  return regex.test(value)
}
