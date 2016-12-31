'use strict';
var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: 'goodnight',
  desc: 'Let Legion get some sleep.',
  fn: (argv, context) => {
    context.msg.channel.sendMessage('Entering sleep mode.').then(() => {
      process.exit(0)
    });
  },
});

// Tests
// accounts for all of us or if it doesn't know the person
// what happens with arguments
