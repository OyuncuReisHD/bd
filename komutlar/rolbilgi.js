const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client,message,args) => {

  var amount = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${amount}`)
  var erreur = new Discord.RichEmbed()
  .setColor(10038562)
  .setDescription("❌ Lütfen Bir Rol İsmi Yazın `Örnek: /rolinfo Üye`");
  if(!role) return message.channel.send(erreur);
  var moment = require("moment");
  moment.locale("tr");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ Rol İsmi', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Role Sahip Kullanıcılar', role.members.size, true)
  .addField('💙 Renk', role.hexColor, true)
  .addField('📣 Etiketleme?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('📅 Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  message.channel.send(rolbilgiEmbed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolinfo', 'rbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'Rol hakkında bilgi verir.',
  usage: 'rolbilgi rolismi'
};
