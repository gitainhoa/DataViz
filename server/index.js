// https://github.com/Pelirrojo/DataViz-DojoKata

var express = require('express');
var cors = require('cors');
var http = require('http');
var request = require('request');

var app = express();
app.use(cors())

app.get('/data/api/it', (req, res) => {
  const peticion = request('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
      // res.send(response.body)
      const json_api = JSON.parse(response.body);

      const output = [];
      for (let i = 0; i < json_api.length; i++) {
        if (json_api[i].pl_discmethod == 'Radial Velocity' ||
          json_api[i].pl_discmethod == 'Imaging' ||
          json_api[i].pl_discmethod == 'Transit Timing Variations' ||
          json_api[i].pl_discmethod == 'Transit' ||
          json_api[i].spl_discmethod == 'Eclipse Timing Variations' ||
          json_api[i].pl_discmethod == 'Astrometry') {
          const json_output = {
            label: json_api[i].pl_discmethod,
            value: parseFloat(json_api[i].pl_pnum)
          };
          output.push(json_output);
        }
      }
      res.send(output);
    }
  });
});


app.listen(7003, function () {
  console.log('Example app listening on port 7003!');
});

app.get('/data/api/mass', (req, res) => {
  const peticion = request('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
      // res.send(response.body)
      const json_api = JSON.parse(response.body);

      const output = [];
      for (let i = 0; i < json_api.length; i++) {
        if (json_api[i].st_mass < 1 ||
          json_api[i].st_mass >1  ||
          json_api[i].st_mass >1.5) {
          const json_output = {
            label: json_api[i].st_mass,
            value: parseFloat(json_api[i].st_mass)
          };
          output.push(json_output);
        }
      }
      res.send(output);
    }
  });
});


app.listen(7003, function () {
  console.log('Example app listening on port 7003!');
});
