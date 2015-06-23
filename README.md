# backbone-request-async

Simple async adapter.

---

### Example

```js
var async = require('backbone-request-async');

Model.prototype.sync = async;

// Or

Model.prototype.sync = function (method, model, options) {
  options.headers = {
    Authorization: 'Token'
  };

  async(method, model, options);
}
```

