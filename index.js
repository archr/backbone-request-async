var request = require('superagent');
var Promise = require('bluebird');

var METHODS = {
  'read': 'get',
  'create':'post',
  'delete': 'del',
  'update': 'put'
};

function noop() {};

module.exports = function (method, model, options) {
  options = options || {};
  method = METHODS[method];

  var url = options.url || model.url();
  var data = model.toJSON();
  var headers = options.headers || {};
  var onError = options.error || noop;
  var onSuccess = options.success || noop;

  return new Promise(function (resolve, reject) {
    request[method](url)
      .send(data)
      .set(headers)
      .end(function (err, res) {
        if (err) {
          onError(err);
          return reject(err);
        }

        onSuccess(res.body);
        return resolve(res.body);
      });
  });
};
