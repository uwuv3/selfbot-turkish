module.exports = {
  name: "ping",
  run: async (client, message) => {
    message.reply({
      content: `\`\`\`Weboscket ping: ${client.ws.ping}ms\`\`\``,
    });
  },
};
