import { InlineKeyboardMarkup } from "telegraf/typings/core/types/typegram";




export default class Keyboard{


    static menu_keyboard(){
        const Menu_keyboard: InlineKeyboardMarkup = {
            inline_keyboard: [
                [
                    { text: ':💳 Buy', callback_data: 'buy' },
                    { text: '💸 Sell', callback_data: 'sell' }
                ],
                [
                    { text: '📈 Positions', callback_data: 'position' },
                    { text: ' Limit Orders', callback_data: 'limit_order' },
                    { text: '💹 DCA Orders', callback_data: 'dca_order' }
                ],
                [
                    {text: 'Copy Trade', callback_data: 'copy_trade'},
                    {text: 'Redacted', callback_data: 'redacted'}
                ],
                [
                    {text: 'New Pairs', callback_data: 'new_pairs'},
                    {text: '💰 Referrals', callback_data: 'referrals'},
                    {text: '⚙️ Settings', callback_data: 'settings'},
                ],
                [
                    {text: 'Bride', callback_data: 'bride'},
                    {text: '💵 Withdraw', callback_data: 'withdraw'}
                ],
                [
                    {text: 'ℹ️ Help', callback_data: 'help'},
                    {text: '↻ Refresh', callback_data: 'refresh'}
                ]
            ]
        };

        return Menu_keyboard
    }
}