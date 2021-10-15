module.exports = {
  server: async function({ payload }, next) {
    this.reply({ silly: true });
    await next();
  },
  client: undefined,
};
