const Discord = require("discord.js"),
  nsfwBot = require("./handler/Client.js"),
  client = new nsfwBot(),
  config = require('./config.json');
const { keep_alive } = require("./keep_alive");
require("discord-buttons")(client);
require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
client.on("warn", console.warn);
client.on("error", console.error);
client.login(config.token).catch(console.error); 