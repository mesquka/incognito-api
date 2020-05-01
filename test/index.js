/* eslint-disable no-console */
const assert = require('assert');
const api = require('..');

async function test() {
  console.log('TESTING NODE CALLS');
  await assert.doesNotReject(api.node.methods.getMiningInfo());
  assert(typeof (await api.node.methods.getMiningInfo()) === 'object');
  assert(typeof (await api.node.methods.getMiningInfo()).BeaconHeight === 'number');
  console.log('getMiningInfo: ', await api.node.methods.getMiningInfo());

  await assert.doesNotReject(api.node.methods.getNetworkInfo());
  assert(typeof (await api.node.methods.getNetworkInfo()) === 'object');
  assert(typeof (await api.node.methods.getNetworkInfo()).NodeTime === 'number');
  console.log('getNetworkInfo: ', await api.node.methods.getNetworkInfo());
  console.log('PASSED\n');


  console.log('TESTING API CALLS');
  await assert.doesNotReject(api.api.methods.tokens());
  assert(typeof (await api.api.methods.tokens()) === 'object');
  assert(typeof (await api.api.methods.tokens())[0].ID === 'number');
  assert(typeof (await api.api.methods.tokens())[0].TokenID === 'string');
  assert(typeof (await api.api.methods.tokens())[0].Verified === 'boolean');
  console.log('tokens (first element in array): ', (await api.api.methods.tokens())[0]);
  console.log('PASSED\n');


  /* console.log('TESTING ANALYTIC CALLS');
  await assert.doesNotReject(api.analytic.methods.getMiningInfo());
  console.log('PASSED\n'); */
}

test();
