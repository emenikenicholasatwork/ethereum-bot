import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv'
dotenv.config()
import Wallet from "./wallet/wallet";
import Keyboard from "./keyboard/Keyboard";
import { InlineKeyboardMarkup } from "telegraf/typings/core/types/typegram";


//create new instance of the telegraf
const bot = new Telegraf(process.env.TOKEN || '')
let state: string = ''

bot.start(async context => {

    //create new etherium wallet
    let new_account = await Wallet.create_new_account()

    // Send a message with HTML markup and the inline keyboard
    context.reply(
        `
        <b>Welcome to Unibot on Ethereum</b>
        \n
Introducing a cutting-edge bot crafted exclusively for etherium Traders. Trade any token instantly right after launch.

Here's your Etherium wallet address linked to your Telegram Account. Simply fund your wallet and dive into trading.

<b>Etherium</b>
<b>${new_account.key}</b>
Balance: <b>${new_account.bal}</b> Eth (<b>$${new_account.usd}</b>)

Click on the Refresh button to update your balance.
        `,
        {
            parse_mode: 'HTML',
            reply_markup: Keyboard.menu_keyboard()
        }
    );
});

bot.action('buy', async context =>{
    state='new_account'
    try{
        let new_account = await Wallet.create_new_account()
        context.reply(`Account succesfully created...
        \n <b>NOTE!!</b> Remember to key private key <b>Secured</b>
         \n <b> Address: </b> ${new_account.add} and <b> Private Key: </b> ${new_account.key}`, {parse_mode: 'HTML'})
    }catch(error){
        console.log(`Encountered an error while creating new account:  ${error}`)
        context.reply('Failed to create an account for you.. consider trying later..')
    }
})

bot.action('sell', async context => {
    
})


bot.launch()
