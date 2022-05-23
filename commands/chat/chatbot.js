const { Database } = require("nukleon");
const db = new Database("/db/chatbot.json"); 
//const db = new Database("db/chatbot.json"); replit için;
// glitch hiç bakmadım
module.exports = {
  name: "chatbot",
  aliases: ["yapay-zeka"],
  run: async (client, message, args) => {
    if (!global.config.admin.includes(message.author.id))
      return message.reply({
        content: "Bu komut **bot yetkilerine** özel!",
        allowedMentions: { repiledUser: false },
      });
    else {
      let x = db.fetch(`chatbot_${message.guild.id}_${message.channel.id}`);
      if (x) {
        try {
          db.remove(`chatbot_${message.guild.id}_${message.channel.id}`);
          message.reply({ content: "Bu kanaldan Başarılı ile kapatıldı!" });
        } catch (err) {
          message.channel.send({
            content: `\`\`\`js
          Hata: 
          ${err}
          \`\`\``,
          });
        }
      } else {
        db.set(
          `chatbot_${message.guild.id}_${message.channel.id}`,
          message.guild.name
        );
        message.reply({ content: "Bu kanaldan Başarılı ile açıldı !" });
      }
    }
  },
};
