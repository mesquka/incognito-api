/* eslint-disable no-console */
const assert = require('assert');
const api = require('..');

async function test() {
  console.log('TESTING NODE CALLS');
  await assert.doesNotReject(api.node.methods.getMiningInfo());
  assert(typeof (await api.node.methods.getMiningInfo()) === 'object');
  assert(typeof (await api.node.methods.getMiningInfo()).BeaconHeight === 'number');
  console.log('getMiningInfo: ', await api.node.methods.getMiningInfo());
  console.log('PASSED\n');


  console.log('TESTING API CALLS');
  await assert.doesNotReject(api.api.methods.getMiningInfo());
  console.log('PASSED\n');


  console.log('TESTING ANALYTIC CALLS');
  await assert.doesNotReject(api.analytic.methods.getMiningInfo());
  console.log('PASSED\n');
}

test();
