import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });




bot.on('message', async (msg) => {
    const text = msg.text;
    const id = msg.chat.id
    const first_name = msg.chat.first_name
    console.log(msg);
    if (text == "/start") {
        bot.sendMessage(id, `Xush kelibsiz ${first_name}! `, {
            reply_markup: {
                keyboard: [
                    [{ text: "Boshlash🔥" }],
                    [{ text: "Menu🍔" }, { text: "Til🌎" }]

                ],
                resize_keyboard: true
            }

        });
    } else if (text == "/help") {
        bot.sendMessage(id, `Sizga qanday yordam kerak? ${first_name}`)
    } else if (text == "/sozlamalar") {
        bot.sendMessage(id, `Sozlamalar:`)
    } else if (text == "Boshlash🔥") {
        const habar = await bot.sendMessage(id, `kuting...`)

        setTimeout(function () {
            bot.deleteMessage(id, habar.message_id)
            console.log("2 sekund kechiktirildi");

        }, 1 * 1000)

        bot.sendPhoto(id, `./img/image.png`,{
            caption:`Yumshoq quyoncha musiqa og‘ushida, tinchlik dengizida suzmoqda.
Har bir ohang yuragini iliqlik bilan quchadi. 🎧✨`,
reply_markup:{
    inline_keyboard:[
        [
            {text: "Rasmlari" ,callback_data:"photos"},
            {text: "Ma`lumot" ,callback_data:"info"}

        ],
        [
            {text: "Sotib olish" , callback_data: "buy"}

        ]
    ]
}
        })
    }
    else if (text == "Menu🍔") {
        bot.sendMessage(id, `menu ga kirildi...`)

    }
    else if (text == "Til🌎") {
        bot.sendMessage(id, `til ga kirildi...`)

    }




    console.log(' Bot ishga tushdi..');
});


