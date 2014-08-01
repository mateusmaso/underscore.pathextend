// underscore.pathextend
// ---------------------
// v0.1.0
//
// Copyright (c) 2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/underscore.pathextend

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    _.mixin(require('underscore.path'));
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    pathExtend: function(object) {
      _.each([].splice.apply(arguments, [1]), function(source) {
        if (source) {
          for (var key in source) {
            var paths = key.split(".");

            if (paths.length == 1) {
              object[key] = source[key];
            } else {
              var property = paths.pop();
              _.path(object, paths.join("."))[property] = source[key];
            }
          }
        }
      });

      return object;
    }
  };

}));