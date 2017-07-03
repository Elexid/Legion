'use strict';
var Clapp = require('../modules/clapp-discord');
var messageService = require('../services/messageService');
var googleService = require('../services/googleService');

module.exports = new Clapp.Command({
  name: 'repeatafterme',
  desc: 'Ask Legion to say something',
  fn: (argv, context) => {
    var args = argv.args;
    messageService.sendMessage(context.msg.channel.id, args.words);
    googleService.randomGoogleImage(args.words, function(err, image) {
      var message;
      if (err) {
        message = 'There was an error retrieving your image';
        console.log('Error: ' + err);
      }
      console.log(image);
      message = image;
      messageService.sendMessage(context.msg.channel.id, message);
    });
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
