var request = require('superagent');

var METHODS = {
  'read': 'get',
  'create':'post',
  'delete': 'del',
  'update': 'put'
};

module.exports = function (method, model, options) {
  var url = options.url || model.url();
  var data = model.toJSON();
  var headers = options.headers || {};
  method = METHODS[method];

  request[method](url)
    .send(data)
    .set(headers)
    .set(options.headers)
    .end(function (err, res) {
      if (err) {
        return options.error(err);
      }

      options.success(res.body);
    });
};
