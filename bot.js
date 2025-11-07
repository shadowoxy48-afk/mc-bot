const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'asensi.mcsmp.net', // Sunucu IP'si
  port: 19132,              // Bedrock değilse 25565 yap
  username: 'BotDeneme123'  // Botun kullanıcı adı
});

bot.on('spawn', () => {
  console.log('✅ Bot sunucuya bağlandı!');
});

bot.on('error', err => console.log('❌ Hata:', err));
bot.on('end', () => console.log('⛔ Bot bağlantısı kapandı.'));
