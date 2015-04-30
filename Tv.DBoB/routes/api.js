var express = require('express');
var router = express.Router();
var async = require("async");
var config = require('../config');
var TVDBClient = require("node-tvdb");
var tvdb = new TVDBClient(config.tvdbapi);
var db = require('../database.js');

router.get('/findSeries/:name', function (req, res) {
    async.parallel({
        found: function (callback) {
            setTimeout(function () {
                tvdb.getSeries(req.params.name, function (err, response) {
                    callback(null, response);
                });
            }, 1000);
        }
    },
function (err, results) {
        console.log(results);
        res.json(results.found);
    });
});

router.get('/getLanguages', function (req, res) {
    async.parallel({
        lang: function (callback) {
            setTimeout(function () {
                tvdb.getLanguages(function (err, response) {
                    callback(null, response);
                });
            }, 1000);
        }
    },
function (err, results) {
        console.log(results);
        res.json(results.lang);
    });
});

router.get('/getAllSeriesByID/:id', function (req, res) {
    async.parallel({
        sers: function (callback) {
            setTimeout(function () {
                tvdb.getSeriesAllById(req.params.id, function (err, response) {
                    callback(null, response);
                });
            }, 1000);
        }
    },
function (err, results) {
        console.log(results);
        res.json(results.sers);
    });
});

router.get('/getSeriesById/:id', function (req, res) {
    async.parallel({
        ser: function (callback) {
            setTimeout(function () {
                tvdb.getSeriesById(req.params.id, function (err, response) {
                    callback(null, response);
                });
            }, 1000);
        }
    },
function (err, results) {
        console.log(results);
        res.json(results.ser);
    });
});

router.get('/saveSeriesById/:id', function (req, res) {
    async.parallel({
        lang: function (callback) {
            setTimeout(function () {
                tvdb.getSeriesAllById(req.params.id, function (err, response) {
                    db.tvseries.findOrCreate({
                        where: { SeriesID: response.SeriesID }, defaults: {
                            id: 0,
                            SeriesName: response.SeriesName,
                            SeriesID: response.SeriesID,
                            Status: response.Status,
                            FirstAired: response.FirstAired,
                            Network: response.Network,
                            NetworkID: response.NetworkID,
                            Runtime: response.Runtime,
                            Genre: response.Genre,
                            Actors: response.Actors,
                            Overview: response.Overview,
                            bannerrequest: 0,
                            lastupdated: response.lastupdated,
                            Airs_DayOfWeek: response.Airs_DayOfWeek,
                            Airs_Time: response.Airs_Time,
                            Rating: response.Rating,
                            flagged: 0,
                            forceupdate: 0,
                            hits: 0,
                            updateID: 0,
                            requestcomment: '',
                            locked: false,
                            mirrorupdate: '01/01/1900',
                            lockedby: 0,
                            autoimport: false,
                            disabled: false,
                            IMDB_ID: response.IMDB_ID,
                            zap2it_id: response.zap2it_id,
                            added: response.added,
                            addedBy: response.addedBy,
                            tms_wanted_old: 0
                        }
                    })
                                .then(function (result) {
                        console.log(response.Episodes);
                        response.Episodes.every(function (element, index, array) {
                            console.log('a');
                                                });
                        

                        callback(null, 'insered');
                    })
                     .catch(function (error) { console.log(error); });
                });
                }, 1000);
        }
    },
function (err, results) {
        console.log(results);
        res.json(results.lang);
    });
});


module.exports = router;