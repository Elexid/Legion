'use strict';
var IoC = require('electrolyte');
//var _ = require('lodash');

var bot = IoC.create('discordBot');

function sendMessage(channelId, message) {
  var channel = bot.channels.get(channelId);
  channel.sendMessage(message);
}

module.exports = {
  sendMessage: sendMessage,
};
