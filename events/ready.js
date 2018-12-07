const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[-] BOT: Komutları yükledim!`);
  console.log(`[-] BOT: ${client.user.username} ismi ile giriş yaptım!`);
  console.log(`[-] BOT: Oyun ismimi ayarladım!`);
  console.log(`[-] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.users.size + ` kullanıcıya hizmet veriyorum!`);

    var Games = [
     
	  `| ${prefix}temizle | ${prefix}8ball |`,
	 
      `| ${prefix}yardım | ${prefix}davet |`,
      
      `| ${client.guilds.size} Sunucu | ${client.channels.size} Kanal | ${client.users.size} Kullanıcı |`,
      
      `| Prefixim: ${prefix} |`
    
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://twitch.tv/lazusakaan123");
        }, 2 * 2500);

};