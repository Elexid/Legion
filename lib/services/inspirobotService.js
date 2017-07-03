'use strict';

var request = require('superagent');

var url = 'http://inspirobot.me/api?generate=true';

function generate(callback) {
  request
  .get(url)
  .end(function(err, resp) {
    if (err) {
      console.log('Error requesting your inspiration:\r\n' + err);
      return callback(err);
    }
    var data = resp.text;
    callback(err, data);
  });
}

module.exports = {
  generate: generate,
};
