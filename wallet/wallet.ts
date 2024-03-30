import Web3 from "web3"
import  Path  from "path"
import * as dotenv from "dotenv"
import axios from "axios"

//getting key form .env file
const env_path = Path.resolve(__dirname, '..', '.env')
dotenv.config({path: env_path})
const infura_network = process.env.ETHEREUM_NETWORK
const infura_key = process.env.INFURA_API_KEY

//create new instance of web3
const web3 = new Web3(new Web3.providers.HttpProvider(`https://${infura_network}.infura.io/v3/${infura_key}`))


export default class Wallet{


    static async create_new_account(): Promise<{add: string, key: string, bal: number, usd: number}>{
        const account = web3.eth.accounts.create()
        const address: string = account.address
        const private_key: string = account.privateKey
        const balanceWei = await web3.eth.getBalance(address)
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether')
        const etherium_price = await Wallet.get_currency_price()
        const usd_balance = etherium_price * parseFloat(balanceEther)
        return {
            add: address,
            key: private_key,
            bal: parseFloat(balanceEther),
            usd: usd_balance
        }
    }

    static async get_currency_price(): Promise<any>{
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        return response.data.ethereum.usd;
    }

}



