'use strict';
var Clapp = require('../modules/clapp-discord');
var nameService = require('../factories/nameService');

module.exports = new Clapp.Command({
  name: 'lb',
  desc: 'Say hello to Legion!',
  fn: (argv, context) => {
    return nameService.getLastName('107583430224551936') + '-Commander A.K.A. "Emma" (:heart:) has 5,531 Legionbux.';
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
