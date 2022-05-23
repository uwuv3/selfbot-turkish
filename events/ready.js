const chalk = require("chalk");
const client = require("../index");

client.on("ready", async () => {
  // Constants.ws.properties.$browser = "Discord Android"; //NOT WORKING
  console.log(
    chalk.green(
      chalk.grey("[") +
        " TOKEN " +
        chalk.grey("] ") +
        chalk.blue(chalk.underline(client.user.tag)) +
        chalk.reset(" ile giriş yapıldı")
    )
  );
});
