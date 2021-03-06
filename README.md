underscore.pathextend [![Build Status](https://travis-ci.org/mateusmaso/underscore.pathextend.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.pathextend)
=====================

This library is an extension for Underscore which allows extending objects using string paths.

## Features

* Extend using paths as keys.

## Dependencies

* underscore.js (>= 1.5.0)
  * underscore.path (>= 0.1.4)

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
