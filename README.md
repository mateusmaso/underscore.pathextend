underscore.pathextend [![Build Status](https://travis-ci.org/mateusmaso/underscore.pathextend.svg?branch=0.1.0)](https://travis-ci.org/mateusmaso/underscore.pathextend)
=====================
This library is an extension for Underscore which allows extending objects using string paths.

## Features

* Extend using paths as keys.

## Dependencies

* underscore.js (>= 1.5)
  * underscore.path

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.pathextend'));
```

## Examples

```javascript
var object = {foo: {bar: 123}};
_.pathExtend(object, {"foo.bar": 312});
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.
