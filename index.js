#!/usr/bin/env node
const d3 = require('./d3');

d3({
  method: 'getElementById',
  id: 1
}, (context) => {
  console.log('OK ', context);
}).catch(console.error);
