var shares = sharesContract.new (
	{
     from: '0x0000', 
     data: 'xxxxxxx', 
     gas: XXXXX
	}, 
	function (e, contract) {
		console.log(e, contract);
		if (typeof contract.address !== 'undefined') {
			console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
		}
	}
)


var contractInstance = MyContract.new([contructorParam1] [, contructorParam2], {data: '0x12345...', from: myAccount, gas: 1000000});



var myContractInstance = MyContract.new(param1, param2, {data: myContractCode, gas: 300000, from: mySenderAddress});
myContractInstance.transactionHash // The hash of the transaction, which created the contract
myContractInstance.address // undefined at start, but will be auto-filled later



// Instantiate from an existing address:
var myContractInstance = MyContract.at(myContractAddress);


// Or deploy a new contract:






var MyContract = web3.eth.contract(abiArray);

// instantiate by address
var contractInstance = MyContract.at([address]);

// deploy new contract
var contractInstance = MyContract.new([contructorParam1] [, contructorParam2], {data: '0x12345...', from: myAccount, gas: 1000000});

// Get the data to deploy the contract manually
var contractData = MyContract.new.getData([contructorParam1] [, contructorParam2], {data: '0x12345...'});
// contractData = '0x12345643213456000000000023434234'







// Deploy the contract asyncronous from Solidity file:
...
const fs = require("fs");
const solc = require('solc')

let source = fs.readFileSync('nameContract.sol', 'utf8');
let compiledContract = solc.compile(source, 1);
let abi = compiledContract.contracts['nameContract'].interface;
let bytecode = compiledContract.contracts['nameContract'].bytecode;
let gasEstimate = web3.eth.estimateGas({data: bytecode});
let MyContract = web3.eth.contract(JSON.parse(abi));

var myContractReturned = MyContract.new(param1, param2, {from:mySenderAddress, data:bytecode, gas:gasEstimate},
							function (err, myContract) {
								if(!err) {
								// NOTE: The callback will fire twice!
								// Once the contract has the transactionHash property set and once its deployed on an address.
								// e.g. check tx hash on the first call (transaction send)
									if(!myContract.address) {
										console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
									// check address on the second call (contract deployed)
									}
									else {
										console.log(myContract.address) // the contract address
									}
							// Note that the returned "myContractReturned" === "myContract",
							// so the returned "myContractReturned" object will also get the address set.
								}
							}
						);
/*
Deploy contract syncronous: The address will be added as soon as the contract is mined.
*/

// Additionally you can watch the transaction by using the "transactionHash" property
var myContractInstance = MyContract.new(param1, param2, {data: myContractCode, gas: 300000, from: mySenderAddress});
myContractInstance.transactionHash // The hash of the transaction, which created the contract
myContractInstance.address // undefined at start, but will be auto-filled later





//DIEGO WEB3 TIPS ------------------------------------------------------------

// Init link to Javascript RPC API
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// Instance contract
var abi = [.......];
var sharesContract = web3.eth.contract(abi);
var myContractInstance = sharesContract.at('0x00000000000');

// Creation new contract
var shares = sharesContract.new (
   {
     from: '0x0000', 
     data: 'xxxxxxx', 
     gas: XXXXX
   }, 
function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
})




var monContratDeploye = monContrat.new (constructorParam1, constructorParam2, {from:adresseEthExp, data:bytecode, gas:gasEstimate}, function (err, monContrat) {if (!err) {if (!monContrat.address) {console.log(monContrat.transactionHash);} else {console.log(monContrat.address);}}});

var monContratDeploye = monContrat.new (123456, {from:deployeur, data:bytecode, gas:500000}, function (err, monContrat) {if (!err) {if (!monContrat.address) {console.log(monContrat.transactionHash);} else {console.log(monContrat.address);}}})