import mineflayer from "mineflayer";

function startBot() {
  const bot = mineflayer.createBot({
    host: "xh1n.aternos.me", // Sunucu IP
    port: 59020, // Sunucu portu
    username: "ShadowAfk", // Bot adı
  });

  bot.on("login", () => console.log("[BOT] Sunucuya giriş yaptı!"));
  bot.on("end", () => {
    console.log("Bot koptu, yeniden bağlanıyor...");
    setTimeout(startBot, 5000);
  });

  bot.on("error", (err) => console.log("Hata:", err.message));
}

startBot();
