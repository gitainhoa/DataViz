'use strict';

var cov_28bo40ueqj = function () {
  var path = '/Users/Ainhoa/Desktop/PracticaDataViz/src/routes.js',
      hash = '614354a4ec59fd43d87d788ad459b5d875fe24ab',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ainhoa/Desktop/PracticaDataViz/src/routes.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 3,
          column: 24
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 52
        }
      },
      '2': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 36
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 7
        }
      }
    },
    fnMap: {
      '0': {
        name: 'routesConfig',
        decl: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 21
          }
        },
        loc: {
          start: {
            line: 6,
            column: 77
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
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

++cov_28bo40ueqj.s[0];
angular.module('app').config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  ++cov_28bo40ueqj.f[0];
  ++cov_28bo40ueqj.s[1];

  $locationProvider.html5Mode(true).hashPrefix('!');
  ++cov_28bo40ueqj.s[2];
  $urlRouterProvider.otherwise('/');

  ++cov_28bo40ueqj.s[3];
  $stateProvider.state('app', {
    url: '/',
    component: 'app'
  });
}