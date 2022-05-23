const client = require("../index");
const { Database } = require("nukleon");
const db = new Database("/db/saas.json");
const dbcb = new Database("/db/chatbot.json");
client.on("messageCreate", async message => {
  const messages = [
    "Aleyküm selam, hoşgeldin",
    "Aleyküm selam, hoşgeldin bir çay alırmıydınız",
    "Aleyküm selam, hg knk",
    "Aleyküm selam kardeşim, Hoş Geldin",
    "Aleyküm selam kardeşim, Hoşgeldin, Nasılsın ?",
  ];
  var sa = [
    "sa",
    "sea",
    "selamın aleyküm",
    "selamun aleyküm",
    "selam",
    "s.a",
    "s.a.",
    "sa."
  ];
  let OtoCevap;
  if (message.channel.type === "DM") {
    OtoCevap = true;
  } else {
    let q = await db.fetch(`saas_${message.guild.id}`);
    if (q) OtoCevap = true;
  }
  if (OtoCevap) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let foundInText = false;

    if (sa.includes(message.content.toLowerCase())) {
      foundInText = true;
    }

    if (foundInText) {
      message.reply({
        content: `${randomMessage}`,
      });
      return;
    }
  } else {
  }
});
