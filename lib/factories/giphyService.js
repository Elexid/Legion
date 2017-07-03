'use strict';

var giphyConfig = require('../../config/giphyConfig');
var request = require('superagent');
var URL = require('url').URL;

var giphyUrl = 'http://api.giphy.com/v1/gifs/';
var apiKey = giphyConfig.apiKey;

function formatTag(tag) {
  return tag.replace(' ', '+');
}

function randomGifyUrl(tag, rating) {
  var url = new URL(giphyUrl + 'random');
  url.searchParams.append('api_key', apiKey);
  url.searchParams.append('tag', formatTag(tag));
  if (rating) {url.searchParams.append('rating', rating);}
  return url;
}

function randomGifyAsync(tag, callback) {
  var url = randomGifyUrl(tag);
  request
  .get(url.href)
  .end(function(err, resp) {
    if (err) {
      console.log('Error requesting random giphy:\r\n' + err);
      return callback(err);
    }
    var data = resp.body.data;
    if (data === [] || data.image_original_url === '') {
      return callback(err, 'Sorry, I couldn\'t find anything.');
    }
    var image;
    if (data.image_frames > 50) {
      image = (data.image_width > data.image_height) ?
      data.fixed_height_small_url
      : data.fixed_width_small_url;
    } else {
      image = data.image_url;
    }
    callback(err, image);
  });
}

module.exports = {
  randomGifyAsync: randomGifyAsync,
};
