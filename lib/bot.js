'use strict';

const Discord = require('discord.js');

(function() {
  var instance;

  function createInstance() {
    var object = new Discord.Client();
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();