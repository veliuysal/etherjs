const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main = async () => {
    // Account Methods
    // const balance = await provider.getBalance(address)
    // console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`);

    // const transactionCount = await provider.getTransactionCount(address)
    // console.log(`Transaction count of ${address} --> ${transactionCount} \n`);

    // Block Methods
    // const blockInfo = await provider.getBlock(100004)
    // console.dir(block)

    // @return TransactionResponse https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse
    // const blockWithTransactions = await provider.getBlockWithTransactions(14710611)
    // console.dir(blockWithTransactions) 

    // Network Status Methods
    // const networkStatus = await provider.getNetwork()
    // console.dir(networkStatus)

    // const latestMinedBlock = await provider.getBlockNumber()
    // console.dir(latestMinedBlock)

    // const gasProceEstimation = await provider.getGasPrice()
    // console.dir(ethers.utils.formatUnits(gasProceEstimation,"gwei"))

    // const feeData = await provider.getFeeData(); //EIP-1559
    // console.dir(`gasPrice -> ${ethers.utils.formatUnits(feeData.gasPrice, "gwei")} gwei` );
    // console.dir(`maxFeePerGas -> ${ethers.utils.formatUnits(feeData.maxFeePerGas, "gwei")} gwei` );
    // console.dir(`maxPriorityFeePerGas -> ${ethers.utils.formatUnits(feeData.maxPriorityFeePerGas, "gwei")} gwei` );
   
}

main()