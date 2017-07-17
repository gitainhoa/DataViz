angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controllerAs: 'main',
    controller($http, jmespath, moment, _) {


      this.graficoit = {data:{id:1},options:{}}

      this.graficoit.options = {

        chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
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

      $http.get("http://localhost:7003/data/api/it")
        .then((response) => {

          var it_data = [
            {
              key: "Valor de instruments",
              values: response.data
            }
          ]
          this.graficoit.data = it_data

        });

      this.graficoMass = {data:{id:1},options:{}}

      this.graficoMass.options = {

        chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      $http.get("http://localhost:7003/data/api/mass")
        .then((response) => {

          this.graficoMass.data = response.data

        });

    }
  });
