const {Web3} =require ('web3');
const ganacheURL='HTTP://127.0.0.1:7545';
const httpProvider=new Web3.providers.HttpProvider(ganacheURL);
const web3=new Web3(httpProvider);

async function main()
{
    try{
        //get current block number
        const currentBlockNumber=await web3.eth.getBlockNumber();
        console.log("current block number is: ",currentBlockNumber);
        // get the list of accounts in the ganache
        const accounts=await web3.eth.getAccounts();
        // get the updated block number
        const updatedBlocknumber=await web3.eth.getBlockNumber();
        console.log('updated block number : ',updatedBlocknumber);   
    }catch(error){
        console.log('an error accurred',error);
    }
}