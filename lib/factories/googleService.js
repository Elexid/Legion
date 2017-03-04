'use strict';

var googleConfig = require('../../config/googleConfig');
var request = require('superagent');
var URL = require('url').URL;

var googleApisUrl = 'https://www.googleapis.com/customsearch/v1';
var apiKey = googleConfig.apiKey;
var customSearchEngineId = googleConfig.cse;

function defaultGoogleUrl(query) {
  var url = new URL(googleApisUrl);
  url.searchParams.append('key', apiKey);
  url.searchParams.append('cx', customSearchEngineId);
  url.searchParams.append('q', encodeURIComponent(query));
  url.searchParams.append('num', 1);
  return url;
}

function googleImageUrl(query) {
  var url = defaultGoogleUrl(query);
  url.searchParams.append('searchType', 'image');
  return url;
}

function randomGoogleImageUrl(query) {
  var url = googleImageUrl(query);
  var startIndex = 50;
  url.searchParams.append('start', startIndex);
  return url;
}

function googleImageAsync(url, callback) {
  request
  .get(url.href)
  .end(function(err, resp) {
    if (err || resp.status !== 200) { return callback(err); }
    console.log(resp.body)
    var image = resp.body.items;
    callback(err, image[0]);
  });
}

function randomGoogleImage(query, callback) {
  var url = randomGoogleImageUrl(query);
  return googleImageAsync(url, function(err, image) {
    if (err) { return callback(err, image); }
    return callback(err, image);
  });
}

module.exports = {
  googleImageAsync: googleImageAsync,
  randomGoogleImage: randomGoogleImage,
};
