module.exports = {
  name: "yardım",
  aliases: ["y"],
  run: async (client, message) => {
    message.reply({
      content:
        "Bilgi```yardım,ping``` Chat ```saas,chatbot(sizi algılamaması için '> ' ekini mesajın önüne ekleyin)```",
      allowedMentions: { repiledUser: true },
    });
  },
};
