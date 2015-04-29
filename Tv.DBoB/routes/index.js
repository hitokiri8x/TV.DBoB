var express = require('express');
var router = express.Router();
function error(){ console.log('AAAAZZZZ');};
/* GET home page. */
router.get('/', function (req, res) {
    var db = require('../database.js');
    var async = require("async");
    async.parallel( {
            lingua: function (callback) {
            setTimeout(function () {
                console.log(db);
                           db.languages.find(30).then(function (result) {
                        var aa = result.englishname;                    
                        callback(null, aa);
                        });
                }, 2000);
            },
            test: function (callback) {
            setTimeout(function () {
                var TVDBClient = require("node-tvdb");
                var tvdb = new TVDBClient("");                
                tvdb.getSeries("The Simpsons", function (err, response) {
                    console.log(response)
                    callback(null, response);
                });
                   
                }, 1000);
            }
    },
function (err, results) {
       console.log(err);
       console.log(results);
       res.render('index', { title: results.lingua });
    });
});

module.exports = router;