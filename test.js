const tools = require('@mailchain/tools-js')

let parsedAddress = tools.parseAddressFromMailchain('<0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6@network.chainname>')
console.log('parseAddressFromMailchain works? ', parsedAddress == '0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6')

let validateEnsName1 = tools.validateEnsName('somename.eth')
console.log("validateEnsName works when it's a name? ", validateEnsName1)

let validateEnsName2 = tools.validateEnsName('0x12345676543')
console.log("validateEnsName works when it's not a name? ", !validateEnsName2)


let validateEthAddress1 = tools.validateEthAddress('somename.eth')
console.log("validateEthAddress works when it's a name? ", !validateEthAddress1)

let validateEthAddress2 = tools.validateEthAddress('0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6')
console.log("validateEthAddress works when it's not a name? ", validateEthAddress2)

