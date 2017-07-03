'use strict';
var Clapp = require('../modules/clapp-discord');
// Var agendaService = require('../services/agendaService');
var agendaService = require('../services/agendaService');

module.exports = new Clapp.Command({
  name: 'schedule',
  desc: 'Schedule Legion to say or do something in the future',
  fn: (args, context) => {
    console.log(context.msg.channel)
    agendaService.scheduleReminderJob('YES IT WORKS!')
  },
});
