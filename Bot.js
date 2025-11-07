const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: "xh1n.aternos.me", // Sunucu IP'si
    port: 59020,             // Port
    username: "ShadowAfk",   // Botun ismi
  });

  bot.on("login", () => console.log("[BOT] Sunucuya giriş yaptı!"));
  bot.on("end", () => {
    console.log("Bot koptu, yeniden bağlanıyor...");
    setTimeout(startBot, 5000);
  });
}

startBot();
