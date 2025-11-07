import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });

console.log("Bot ishga tushdi...");

bot.on('message', async (msg) => {
  const text = msg.text;
  const id = msg.chat.id;
  const first_name = msg.chat.first_name;

  if (text === "/start") {
    await bot.sendMessage(id, `Xush kelibsiz, ${first_name}!`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash🔥" }],
          [{ text: "Tovarlar" }, { text: "Sozlamalar" }]
        ],
        resize_keyboard: true
      }
    });
  }

  else if (text === "/help") {
    bot.sendMessage(id, `Sizga qanday yordam kerak, ${first_name}?`);
  }

  else if (text === "Boshlash🔥") {
    const habar = await bot.sendMessage(id, `Kuting...`);
    setTimeout(() => bot.deleteMessage(id, habar.message_id), 1000);

    const products = [
      "./img/image copy.png",
      "./img/image copy 2.png",
      "./img/image copy 3.png",
      "./img/image copy 4.png"
    ];

    for (let img of products) {
      await bot.sendPhoto(id, img, {
        caption: `200 000 so'm`,
        reply_markup: {
          inline_keyboard: [
            [{ text: "Batafsil", callback_data: "photos" }],
            [{ text: "Sotib olish", callback_data: "buy" }]
          ]
        }
      });
    }
  }

  else if (text === "Tovarlar") {
    const habar2 = await bot.sendMessage(id, `Kuting...`);
    setTimeout(() => bot.deleteMessage(id, habar2.message_id), 1000);

    const items = [
      "./img/image copy 5.png",
      "./img/image copy 6.png",
      "./img/image copy 7.png"
    ];

    for (let img of items) {
      await bot.sendPhoto(id, img, {
        caption: `Nike`,
        reply_markup: {
          inline_keyboard: [
            [{ text: "Batafsil", callback_data: "photos" }],
            [{ text: "Sotib olish", callback_data: "buy" }]
          ]
        }
      });
    }
  }

  else if (text === "Sozlamalar") {
    const habar3 = await bot.sendMessage(id, `Kuting...`);
    setTimeout(() => bot.deleteMessage(id, habar3.message_id), 1000);

    bot.sendMessage(id, `Sozlamalar:`, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Biz haqimizda", callback_data: "aboutus" },
            { text: "Til", callback_data: "lang" }
          ],
          [{ text: "Aloqa", callback_data: "contact" }]
        ]
      }
    });
  }
});

// callback_query hodisalarini alohida ushlaymiz
bot.on('callback_query', async (query) => {
  const id = query.message.chat.id;
  const data = query.data;

  if (data === "photos") {
    await bot.sendMessage(id, `👟 NIKE — Har bir qadamingizda qulaylik va uslub!  

💫 Dunyoning eng mashhur brendlari orasida faxr bilan o‘rin olgan **Nike** sizga nafaqat sport uchun, balki kundalik hayot uchun ham ideal tanlovni taklif etadi!

🔥 Afzalliklar:
• 100% original Nike mahsulotlari  
• Har mavsum uchun yangi kolleksiyalar  
• Erkaklar, ayollar va bolalar uchun keng tanlov  
• Eng so‘nggi modadagi dizaynlar va zamonaviy ranglar  
• Qulay narxlar va tezkor yetkazib berish 🚚  

👟 Bugunoq buyurtma bering va harakatda qoling!`);
  }

  else if (data === "lang") {
    await bot.sendMessage(id, `Tilni tanlang:`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🇺🇿 O'zbekcha", callback_data: "uz" }],
          [{ text: "🇷🇺 Русский", callback_data: "ru" }]
        ]
      }
    });
  }

  else if (data === "contact") {
    await bot.sendMessage(id, `📞 Aloqa:  
Telegram: @komilova201  
Tel: +998 97 606 15 10`);
  }

  else if (data === "buy") {
    await bot.sendMessage(id, `✅ Buyurtmangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.`);
  }

  else if (data === "aboutus") {
    await bot.sendMessage(id, `👟 Biz haqimizda:  
Biz sizga faqat original Nike mahsulotlarini taqdim etamiz. Har bir mijoz uchun sifat, ishonch va zamonaviy uslub — bizning ustuvor maqsadimiz.`);
  }

  await bot.answerCallbackQuery(query.id);
});
