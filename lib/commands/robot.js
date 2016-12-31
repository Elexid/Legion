'use strict';
var Clapp = require('../modules/clapp-discord');
var nameService = require('../factories/nameService');

module.exports = new Clapp.Command({
  name: 'robot',
  desc: 'Generate a robot friend',
  fn: (argv, context) => {
    console.log(argv)
    return 'https://robohash.org/' + argv.args.robotName;
  },
  args: [
    {
      name: 'robotName',
      desc: 'The name of your generated robot',
      type: 'string',
      required: true,
      default: 'Legion',
    },
  ],
});

// Tests
// accounts for all of us or if it doesn't know the person
// what happens with arguments
