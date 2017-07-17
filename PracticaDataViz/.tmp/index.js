'use strict';

var cov_26ml20arz3 = function () {
  var path = '/Users/Ainhoa/Desktop/PracticaDataViz/src/index.js',
      hash = '92ec045f47b02d2f20ef3c73f8c0d08a9fbbc101',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ainhoa/Desktop/PracticaDataViz/src/index.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 9,
          column: 20
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_26ml20arz3.s[0];
/* global moment:false */
/* global jmespath:false */
/* global _:false */

angular.module('app', ['ui.router', 'ui.bootstrap', 'nvd3']).constant('moment', moment).constant('jmespath', jmespath).constant('_', _);