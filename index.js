var request = require('superagent');

var METHODS = {
  'read': 'get',
  'create':'post',
  'delete': 'del',
  'update': 'put'
};

module.exports = function (method, model, options) {
  var url = model.url;
  var data = model.toJSON();
  var agent = request.agent();
  var headers = options.headers || {};
  method = METHODS[method];

  agent[method](url)
    .send(data)
    .set(headers)
    .set(options.headers)
    .end(options.success);
};
