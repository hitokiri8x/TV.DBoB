var express = require('express');
var router = express.Router();
var config = require('../config');
var db = require('../database.js');
var async = require("async");
var TVDBClient = require("node-tvdb");
var tvdb = new TVDBClient(config.tvdbapi); 

function error(){ console.log('AAAAZZZZ');};
/* GET home page. */
router.get('/', function (req, res) {
   async.parallel( {
            lingua: function (callback) {
            setTimeout(function () {
                        db.languages.find(30).then(function (result) {
                        var aa = ''//result.englishname;                    
                        callback(null, aa);
                        });
                }, 2000);
            },
            test: function (callback) {
            setTimeout(function () {                         
                tvdb.getSeries("The Simpsons", function (err, response) {
                   callback(null, response);
                });
                   
                }, 1000);
            }
    },
function (err, results) {
       res.render('index', { title: results.lingua });
    });
});

//simply return the name 
router.get('/test/:name', function (req, res) {
    console.log(req.params.name);
    async.parallel({
           test: function (callback) {
            setTimeout(function () {            
                 callback(null, req.params.name);                                  
            }, 1000);
        }
    },
function (err, results) {
        console.log(err);
        res.render('index', { title: results.test });
    });
});




module.exports = router;