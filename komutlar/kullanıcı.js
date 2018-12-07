const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Kullanıcı Komutları:**", `+şifre = şifre oluşturur. \n+çekiç = çekiç atar. \n+çayiç = çay içersiniz. \n+çayaşekerat = çaya şeker atar. \n+yetkilerim = yetkilerini gösterir. \n+yumruh-at = istediğnize yumruk atarsınız. \n+yazıtura = yazı tura atat. \n+yaz = bota yazı yazdırırsınız. \n+sunucuresmi = sunucunun resmini atar. \n+sunucu-bilgi = sunucunun bilgisini atar. \n+slot = slot yapar. \n+simit = simit resmi atar. \n+saat = saati gösterir. \n+ping = pingi gösterir. \n+sigara = sigara yakar. \n+davet = botun davet linkini atar. \n+mcödül = mc başarım atar. \n+koş = koşarsınız. \n+kralol = kral olursunuz. \n+afk = afk olursunuz. \n+aşk = aşkını ölçer \n+espri = espiri yaparsınız. \n+gifara = gifararsınız. \n+kafasınasık = kafasına sıkar. \n+kanalbilgi = kanal hakında bilgi verir. `)
  .setFooter('')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anakomutlar', 'a', 'ana', 'komut'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'anakomutlar komutlarını gösterir.',
  usage: 'anakomutlar [komut]'
};
