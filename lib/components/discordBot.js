'use strict';
const Discord = require('discord.js');

exports = module.exports = function() {
  var discordBot = new Discord.Client();
  return discordBot;
};

exports['@singleton'] = true;
