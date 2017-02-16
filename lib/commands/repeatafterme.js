'use strict';
var Clapp = require('../modules/clapp-discord');
var messageService = require('../factories/messageService');

module.exports = new Clapp.Command({
  name: 'repeatafterme',
  desc: 'Ask Legion to say something',
  fn: (argv, context) => {
    var args = argv.args;
    messageService.sendMessage(context.msg.channel.id, args.words)
    context.msg.delete();
  },
  args: [
    {
      name: 'words',
      desc: 'What you would like Legion to say.',
      type: 'string',
      required: true,
      default: '',
    },
  ],
});
