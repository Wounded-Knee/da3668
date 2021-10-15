module.exports = {
  server: async function({ payload }, next) {
    this.reply({ now: Date.now() });
    await next();
  },
  client: undefined,
};
