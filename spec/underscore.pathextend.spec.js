var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.pathextend'));

describe("underscore.pathextend", function() {
  beforeEach(function() {
    this.object = {foo: {bar: 123}};
  });

  it("should extend normaly", function() {
    var object = _.pathExtend(_.clone(this.object), {foo: 312});
    chai.expect(object.foo, "foo").to.equal(312);
  });

  it("should extend nested properties by keypath", function() {
    var object = _.pathExtend(_.clone(this.object), {"foo.bar": 312});
    chai.expect(object.foo.bar).to.equal(312);
  });
});