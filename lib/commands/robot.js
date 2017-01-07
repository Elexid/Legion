'use strict';
var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: 'robot',
  desc: 'Generate a robot friend',
  fn: (argv) => {
    var args = argv.args;
    if (args.version !== undefined && args.version !== 1 && args.version !== 2 && args.version !== 3) {
      return 'ERROR! If specified, robot version must be 1, 2, or 3.\r\nhttps://robohash.org/ERROR';
    }
    return 'https://robohash.org/' + encodeURI(args.name) + '?set=set' + args.version;
  },
  args: [
    {
      name: 'name',
      desc: 'The name of your new robot',
      type: 'string',
      required: true,
      default: '',
    },
    {
      name: 'version',
      desc: 'Version set of your robot',
      type: 'number',
      required: false,
      default: 1,
    },
  ],
});
