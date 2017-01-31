'use strict';

var Agenda = require('agenda');
var uuid = require('node-uuid');

var agenda = new Agenda({db: { address: 'localhost:27017/agenda', collection: 'agendaJobs' }});

// Say something job
// Find image job
// Help

function scheduleReminderJob(text, channel) {
  var id = uuid.v4();

  agenda.define(id, function(job, done) {
    var jobText = job.attrs.data.text;
    //var channel = job.attrs.data.channel;
    channel.sendMessage(jobText);
    console.log(jobText);
    done();
  });

  agenda.schedule('in 2 seconds', id, {text: text /*, channel: channel*/ });
  agenda.start();
}

module.exports = {
  scheduleReminderJob: scheduleReminderJob,
};
