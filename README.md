# backbone-request-sync

Simple sync adapter.

---

### Example

```js
var sync = require('backbone-request-sync');

Model.prototype.sync = sync;

// Or

Model.prototype.sync = function (method, model, options) {
  options.headers = {
    Authorization: 'Token'
  };

  sync(method, model, options);
}
```

