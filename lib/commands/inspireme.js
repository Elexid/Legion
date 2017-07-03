'use strict';
var Clapp = require('../modules/clapp-discord');
var messageService = require('../services/messageService');
var inspirobotService = require('../services/inspirobotService');

module.exports = new Clapp.Command({
  name: 'inspireme',
  desc: 'Seek some robotic inspiration',
  fn: (argv, context) => {
    inspirobotService.generate(function(err, image) {
      var message;
      if (err) {
        message = 'There was an error retrieving your inspiration. Sorry!';
        console.log('Error: ' + err);
      }
      message = image;
      messageService.sendMessage(context.msg.channel.id, message);
    });
    context.msg.delete();
  },
  args: [],
});
