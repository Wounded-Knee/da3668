const { features } = require('./config');

module.exports = features.map(
  featureName => require(`./features/${featureName}`)
).reduce((exports, { client, server }) => ({
  ...exports,
  server: [...exports.server || [], server],
  client: [...exports.client || [], client],
}), { features });
