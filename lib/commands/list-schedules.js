'use strict';
var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: 'list-schedules',
  desc: 'Get a list of everything Legion is scheduled to do',
  fn: () => {
    return 'Coming soon'
  },
});
