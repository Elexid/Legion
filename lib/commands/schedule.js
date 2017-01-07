'use strict';
var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: 'schedule',
  desc: 'Schedule Legion to say or do something in the future',
  fn: () => {
    return 'Coming soon'
  },
});
