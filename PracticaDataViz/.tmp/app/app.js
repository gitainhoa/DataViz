'use strict';

var cov_goa4mpipy = function () {
  var path = '/Users/Ainhoa/Desktop/PracticaDataViz/src/app/app.js',
      hash = '41a36c622de2be59c8d61fb12e61f0c8dfa7d5d0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ainhoa/Desktop/PracticaDataViz/src/app/app.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 54,
          column: 5
        }
      },
      '1': {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 47
        }
      },
      '2': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 37,
          column: 8
        }
      },
      '3': {
        start: {
          line: 22,
          column: 25
        },
        end: {
          line: 22,
          column: 40
        }
      },
      '4': {
        start: {
          line: 23,
          column: 25
        },
        end: {
          line: 23,
          column: 40
        }
      },
      '5': {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 26,
          column: 40
        }
      },
      '6': {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 50,
          column: 11
        }
      },
      '7': {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 47,
          column: 11
        }
      },
      '8': {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 48,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 22,
            column: 13
          },
          end: {
            line: 22,
            column: 14
          }
        },
        loc: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 41
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 14
          }
        },
        loc: {
          start: {
            line: 23,
            column: 24
          },
          end: {
            line: 23,
            column: 41
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 25,
            column: 23
          },
          end: {
            line: 25,
            column: 24
          }
        },
        loc: {
          start: {
            line: 25,
            column: 34
          },
          end: {
            line: 27,
            column: 11
          }
        },
        line: 25
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 40,
            column: 14
          },
          end: {
            line: 40,
            column: 15
          }
        },
        loc: {
          start: {
            line: 40,
            column: 28
          },
          end: {
            line: 50,
            column: 9
          }
        },
        line: 40
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

++cov_goa4mpipy.s[0];
angular.module('app').component('app', {
  templateUrl: 'app/template.html',
  controllerAs: 'main',
  controller: function controller($http, jmespath, moment, _) {
    var _this = this;

    ++cov_goa4mpipy.s[1];


    this.graficoit = { data: { id: 1 }, options: {} };

    ++cov_goa4mpipy.s[2];
    this.graficoit.options = {

      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function x(d) {
          ++cov_goa4mpipy.f[0];
          ++cov_goa4mpipy.s[3];
          return d.label;
        },
        y: function y(d) {
          ++cov_goa4mpipy.f[1];
          ++cov_goa4mpipy.s[4];
          return d.value;
        },
        showValues: true,
        valueFormat: function valueFormat(d) {
          ++cov_goa4mpipy.f[2];
          ++cov_goa4mpipy.s[5];

          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Discovery Instrument'
        },
        yAxis: {
          axisLabel: 'Number of Planets in the Planetary Sistem Discovered',
          axisLabelDistance: -10
        }
      }
    };

    ++cov_goa4mpipy.s[6];
    $http.get("http://localhost:7003/data/api/it").then(function (response) {
      ++cov_goa4mpipy.f[3];


      var it_data = (++cov_goa4mpipy.s[7], [{
        key: "Valor de instruments",
        values: response.data
      }]);
      ++cov_goa4mpipy.s[8];
      _this.graficoit.data = it_data;
    });
  }
});