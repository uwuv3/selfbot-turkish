const { Database } = require("nukleon");
const db = new Database("/db/saas.json");
//const db = new Database("db/chatbot.json"); replit için;
// glitch hiç bakmadım
module.exports = {
  name: "saas",
  aliases: ["sa-as"],
  run: async (client, message, args) => {
     if (!global.config.admin.includes(message.author.id) && !message.member.permissions.has("ADMINISTRATOR")) {
         return message.reply({
        content: "Bu komut **bot yetkilerine** özel!",
        allowedMentions: { repiledUser: false },
      })
    }
    else {
      let x = db.fetch(`saas_${message.guild.id}`);
      if (x) {
        try {
          db.remove(`saas_${message.guild.id}`);
          message.reply({ content: "Başarılı ile kapatıldı!" });
        } catch (err) {
          message.channel.send({
            content: `\`\`\`js
          Hata: 
          ${err}
          \`\`\``,
          });
        }
      } else {
        db.set(`saas_${message.guild.id}`, message.guild.name);
        message.reply({ content: "Başarılı ile açıldı !" });
      }
    }
  },
};
