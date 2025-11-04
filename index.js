import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });




bot.on('message', (msg) => {
    const text = msg.text;
    const id = msg.chat.id
    const first_name = msg.chat.first_name
    console.log(msg);
    if (text == "/start") {
        bot.sendMessage(id, `Xush kelibsiz ${first_name}! `, {
            reply_markup: {
                keyboard: [
                    [{ text: "Home🔥" }],
                    [{ text: "Menu🍔" }, { text: "Til🌎" }]

                ],
                resize_keyboard: true
            }

        });
    } else if (text == "/help") {
        bot.sendMessage(id, `Sizga qanday yordam kerak? ${first_name}`)
    } else if (text == "/sozlamalar") {
        bot.sendMessage(id, `Sozlamalar:`)
    }else if(text == "Home🔥"){
        bot.sendMessage(id, `home ga kirildi...`)

    }
    else if(text == "Menu🍔"){
        bot.sendMessage(id, `menu ga kirildi...`)

    }
    else if(text == "Til🌎"){
        bot.sendMessage(id, `til ga kirildi...`)

    }




    console.log(' Bot ishga tushdi..');
});


