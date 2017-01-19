var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var fs = require('fs');
var solc = require('solc');
//
var source = fs.readFileSync('nameContract.sol', 'utf8');
var compiledContract = solc.compile(source, 1);
var abi = compiledContract.contracts['nameContract'].interface;
var bytecode = compiledContract.contracts['nameContract'].bytecode;
var gasEstimate = web3.eth.estimateGas({data: bytecode});
var MyContract = web3.eth.contract(JSON.parse(abi));
//