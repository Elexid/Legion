'use strict';

const fs      = require('fs');
const Clapp   = require('./modules/clapp-discord');
const cfg     = require('../config/config.js');
const pkg     = require('../package.json');
const Discord = require('discord.js');
var IoC       = require('electrolyte');

IoC.use(IoC.dir('lib/components'));
var bot = IoC.create('discordBot');

var app = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  separator: cfg.separator,
  version: pkg.version,
  onReply: (msg, context) => {
    // Fired when input is needed to be shown to the user.
    context.msg.channel.sendMessage(msg).then(botResponse => {
      console.log(botResponse)
      if (cfg.deleteAfterReply.enabled || botResponse.deleteAfterReply) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        botResponse.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
      }
    });
  },
});

// Load every command in the commands folder
fs.readdirSync('./lib/commands/').forEach(file => {
  app.addCommand(require('./commands/' + file));
});

bot.on('message', msg => {
  // Fired when someone sends a message
  if (app.isCliSentence(msg.content)) {

    // Gross hack to make keywords case insensitive
    var messageWords = msg.content.split(' ');
    messageWords[0] = messageWords[0].toLowerCase();
    msg.content = messageWords.join(' ');

    app.parseInput(msg.content, {
      msg: msg,
      // Keep adding properties to the context as you need them
    });
  }
});

bot.login(cfg.token).then(() => {
  console.log('Running!');
});
