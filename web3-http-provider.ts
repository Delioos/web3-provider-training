const { Web3 } = require('web3');

// connect to eth network using http provider
const ganachUrl = 'http://localhost:7545';
const httpProvider = new Web3.provides.httpProvider(ganachUrl);
const web3 = new Web3(httpProvider);

async function main() {
    try {
        // get current block number from the network
        const currentBlock = await web3.eth.getBlockNumber();
        console.log(`Current block number : $currentBlock`)
        
    }
}
