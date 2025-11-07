import mineflayer from "mineflayer";

function startBot() {
  const bot = mineflayer.createBot({
    host: "xh1n.aternos.me", // Sunucu IP'si
    port: 59020, // Bedrock değilse 25565 yap
    username: "ShadowAfk", // Botun kullanıcı adı
  });

  bot.on("login", () => console.log("[BOT] Sunucuya giriş yaptı!"));
  bot.on("end", () => {
    console.log("Bot koptu, yeniden bağlanıyor...");
    setTimeout(startBot, 5000);
  });
}

startBot();
