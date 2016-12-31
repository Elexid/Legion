'use strict';
var Clapp = require('../modules/clapp-discord');
var http = require('http')

module.exports = new Clapp.Command({
  name: 'da',
  desc: 'Still under development. May potentially kill Legion.',
  fn: (argv) => {
    http.get({
      hostname: 'https://www.deviantart.com/api/v1/oauth2/browse/categorytree'
    })
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

// TODO: versions
