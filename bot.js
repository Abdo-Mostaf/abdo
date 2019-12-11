const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("652802989416775684")
setInterval(function() {
channel.send(`Dark `);
}, 30)
})

client.login(process.env.BOT_TOKEN);