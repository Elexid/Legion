'use strict';
var Clapp = require('../modules/clapp-discord');
var nameService = require('../factories/nameService');
var messageService = require('../factories/messageService');

module.exports = new Clapp.Command({
  name: 'hello',
  desc: 'Say hello to Legion!',
  fn: (argv, context) => {
    var authorId = context.msg.author.id;
    return 'Greetings, ' + nameService.getLastName(authorId) + '-Commander.';
  },
});

// Tests
// accounts for all of us or if it doesn't know the person
// what happens with arguments
