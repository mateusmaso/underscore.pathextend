underscore.pathextend
=====================
This library is an extension for Underscore which allows extending objects using string paths.

## Features

* Extend using paths as keys.

## Dependencies

* underscore.js (>= 1.5)

## Examples

```javascript
var object = {foo: {bar: 123}};

_.pathextend(object, {"foo.bar": 312});
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.
