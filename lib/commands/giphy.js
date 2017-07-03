'use strict';
var Clapp = require('../modules/clapp-discord');
var messageService = require('../factories/messageService');
var giphyService = require('../factories/giphyService');

module.exports = new Clapp.Command({
  name: 'giphy',
  desc: 'Get a giphy image',
  fn: (argv, context) => {
    var args = argv.args;
    //messageService.sendMessage(context.msg.channel.id, args.tag);
    giphyService.randomGifyAsync(args.tag, function(err, image) {
      var message;
      if (err) {
        message = 'There was an error retrieving your image. Sorry!';
        console.log('Error: ' + err);
      }
      message = image;
      messageService.sendMessage(context.msg.channel.id, args.tag + ':\r\n' + message);
    });
    context.msg.delete()
  },
  args: [
    {
      name: 'tag',
      desc: 'Giphy image tag',
      type: 'string',
      required: true,
      default: '',
    },
    {
      name: 'rating',
      desc: 'Image rating (Y, G, PG, PG-13, R). Content will include selected rating and below.',
      type: 'string',
      required: false,
      default: '',
    },
  ],
});
