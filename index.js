var request = require('superagent');
var Promise = require('bluebird');

var METHODS = {
  'read': 'get',
  'create':'post',
  'delete': 'del',
  'update': 'put',
  'patch':  'patch'
};

function noop() {};

module.exports = function (method, model, options) {
  options = options || {};
  method = METHODS[method];

  var url = options.url || model.url();
  var data = options.attrs || model.toJSON();
  var headers = options.headers || {};
  var error = options.error || noop;
  var success = options.success || noop;

  return new Promise(function (resolve, reject) {
    request[method](url)
      .send(data)
      .set(headers)
      .end(function (err, res) {
        if (err) {
          error(err);
          return reject(err);
        }

        success(res.body);
        return resolve(res.body);
      });
  });
};
