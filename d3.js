const { compose } = require('middleware-io');
const { server } = require('./features');

class Context {
  constructor(request, callback) {
    this.request = request;
    this.payload = {};
  }

  reply(obj) {
    Object.assign(this.payload, obj);
  }
}

module.exports = (request, ...args) => {
  const context = new Context(request);
  const mixins = (server || []).map(mixin => mixin.bind(context));
  const kernel = compose(mixins);
  return kernel(context, ...args);
};
