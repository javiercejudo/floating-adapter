/*jshint node:true */

'use strict';

var floatingFactory = require('floating');

module.exports = {
  getInstance: floatingFactory,
  getPrecision: getPrecision,
  setPrecision: setPrecision,
  plus: plus,
  minus: minus,
  times: times,
  div: div,
  pow: pow,
  equals: equals,
  toString: toString,
  valueOf: valueOf,
  parseInput: Number
};

// not necessarily true nor enforceable
var precision = 17;

function getPrecision() {
  return precision;
}

function setPrecision(Floating, n) {
  precision = n;
}

function plus(x, y) {
  return x.plus(y);
}

function minus(x, y) {
  return x.minus(y);
}

function times(x, y) {
  return x.times(y);
}

function div(x, y) {
  return x.div(y);
}

function pow(x, y) {
  return x.pow(y);
}

function equals(x, y) {
  return x.equals(y);
}

function toString(x) {
  return x.toString();
}

function valueOf(x) {
  return x.valueOf();
}
