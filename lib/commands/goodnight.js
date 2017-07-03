'use strict';
var Clapp = require('../modules/clapp-discord');
var nameService = require('../services/nameService');

module.exports = new Clapp.Command({
  name: 'goodnight',
  desc: 'Let Legion get some sleep.',
  fn: (argv, context) => {
    if (nameService.isOwner(context.msg.author.id)) {
      context.msg.channel.sendMessage('Entering sleep mode.').then(() => {
          process.exit(0);
        });
    } else {
      return 'ALERT: YOU ARE NOT MY MOTHER';
    }
  },
});
