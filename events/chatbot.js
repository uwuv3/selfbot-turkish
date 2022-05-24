const client = require("../index");
const { Database } = require("nukleon");
const db = new Database("/db/chatbot.json");
const ai = require("@codare/codare.ai");
client.on("messageCreate", async message => {
  let OtoCevap;
  if (message.channel.type === "DM") {
    OtoCevap = true;
  } else {
    let q = await db.fetch(`chatbot_${message.guild.id}_${message.channel.id}`);
    if (q) OtoCevap = true;
  }
  if (OtoCevap) {
    let args = message.content.trim().split(/ +/g);
    let commandName = args.join(" ");
    if (message.author.bot) return;
    if (message.author.id === client.user.id) {
      if (!message.content.startsWith("-")) return;
    }
    if (message.content.startsWith(global.config.prefix)) return;
    if (message.content.startsWith("> ")) return;
    let soru = commandName;
    let x = soru.toLocaleLowerCase();
    var sa = [
      "sa",
      "sea",
      "selamın aleyküm",
      "selamun aleyküm",
      "selam",
      "s.a",
      "s.a.",
    ];
    if (sa.includes(x)) return;
    
    let y = soru.replace("?", "؟");
    if(!y) y= "ne yazayım"
    ai.sor(y).then(uwu => {
      var msj = uwu
        .replace("codere.fun", `**website**`)
        .replace("furtsy", `**sahibi**`)
        .replace("Furtsy", `**sahibi**`)
        .replace("CodAre", `**website**`)
        .replace("http://www.msn.com/en-us/news", "")
        .replace("http://www.msn.com/en-us/music","")
        .replace("http://www.bing.com/images","")

      message.reply({ content: "> " + msj });
    });
  } else {
  }
});
