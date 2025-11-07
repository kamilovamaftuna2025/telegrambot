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
                    [{ text: "Tovarlar" }, { text: "Sozlamalar" }]

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
            console.log("1 sekund kechiktirildi");

        }, 1 * 1000)
        bot.sendPhoto(id, `./img/image copy.png`, {
            caption: `200 000so'm`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Rasmlari", callback_data: "photos" },
                        { text: "Ma`lumot", callback_data: "info" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
        bot.sendPhoto(id, `./img/image copy 2.png`, {
            caption: `200 000so'm`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
        bot.sendPhoto(id, `./img/image copy 3.png`, {
            caption: `200 000so'm`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
        bot.sendPhoto(id, `./img/image copy 4.png`, {
            caption: `200 000so'm`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })

    }
    else if (text == "Tovarlar") {
        const habar2 = await bot.sendMessage(id, `kuting...`)
        setTimeout(function () {
            bot.deleteMessage(id, habar2.message_id)
        }, 1 * 1000)
        bot.sendPhoto(id, `./img/image copy 5.png`, {
            caption: `Nike`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
        bot.sendPhoto(id, `./img/image copy 6.png`, {
            caption: `Nike`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
        bot.sendPhoto(id, `./img/image copy 7.png`, {
            caption: `Nike`,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Batafsil", callback_data: "photos" }

                    ],
                    [
                        { text: "Sotib olish", callback_data: "buy" }

                    ]
                ]
            }
        })
    }
    else if (text == "Sozlamalar") {
        const habar3 = await bot.sendMessage(id, `kuting...`)
        setTimeout(() => {
            bot.deleteMessage(id, habar3.message_id)
        }, 1 * 1000);
        bot.sendMessage(id, `Sozlamalar:`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Biz haqimizda", callback_data: "aboutus" },
                        { text: "Til", callback_data: "lang" }
                    ],
                    [
                        { text: "Aloqa", callback_data: "contact" }
                    ]
                ]
            }
        })
    }
    else if (text == "photos") {
        bot.sendMessage(id, `👟 NIKE — Har bir qadamingizda qulaylik va uslub!

💫 Dunyoning eng mashhur brendlari orasida faxr bilan o‘rin olgan Nike sizga nafaqat sport uchun, balki kundalik hayot uchun ham ideal tanlovni taklif etadi!

🔥 Afzalliklarimiz:
• 100% original Nike mahsulotlari
• Har mavsum uchun yangi kolleksiyalar
• Erkaklar, ayollar va bolalar uchun keng tanlov
• Eng so‘nggi modadagi dizaynlar va zamonaviy ranglar
• Qulay narxlar va tezkor yetkazib berish 🚚

⭐️ Siz uchun qulaylik:
Har bir model uchun batafsil tavsif, o‘lchamlar jadvali, va haqiqiy suratlar mavjud.
O‘z uslubingizni toping — Nike bilan har qadamda ishonch va energiyani his eting!

👟 Bugunoq buyurtma bering va harakatda qoling!`)
    }
    
else if(text == "lang"){
    bot.sendMessage(`Tilni tanlang:`,{
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Uz", callback_data: "uz" }

                    ],
                    [
                        { text: "Ru", callback_data: "ru" }

                    ]
                ]
            }
        })
}
else if(text == "contact"){
    bot.sendMessage(`Telegram: @komilova201 \n Tel:+998 97 606 15 10 \n `)
}
else if(text == "buy"){
    bot.sendMessage(`Buyurtmangiz qabul qilindi,ozimiz sizga aloqaga chqamiz! `)
}


    console.log(' Bot ishga tushdi..');
});


