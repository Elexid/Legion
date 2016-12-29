'use strict';
var Clapp = require('../modules/clapp-discord');
var names = require('../factories/nameService');

module.exports = new Clapp.Command({
  name: 'Hello',
  desc: 'Say hello to Legion!',
  fn: (argv, context) => {
    //console.log(argv);
    var authorId = context.msg.author.id;
    console.log(authorId);
    console.log(names.ids[authorId]);
    // This output will be redirected to your app's onReply function

    return 'Greetings, ' + names.getLastName(authorId) + '-Commander.';
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined',
    },
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false,
    },
  ],
});

// Tests
// accounts for all of us or if it doesn't know the person
// what happens with arguments
