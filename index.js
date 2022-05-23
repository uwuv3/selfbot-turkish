console.clear();
require("dotenv").config();
const chalk = require("chalk");
const { Client, Collection } = require("discord.js-selfbot-v13");
const fs = require("fs");
global.config = {
  prefix: "!",
  admin: ["IDNİZ"],
};
//uptime
require("./replit");
require("./glitch");
//discord.js
const client = new Client();
require("./antiCrash")(client);
//handler
module.exports = client;
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client
  .login(process.env.token)
  .catch(() =>
    console.log(
      chalk.red(
        chalk.grey("[") +
          " TOKEN " +
          chalk.grey("]") +
          chalk.reset(" Geçersiz token")
      )
    )
  );
fs.writeFileSync("log.txt", "");
var logger = fs.createWriteStream("log.txt");
var writeLine = line => logger.write(`\n${line}`);

client.on("debug", async debug => {
  writeLine(debug);
});
