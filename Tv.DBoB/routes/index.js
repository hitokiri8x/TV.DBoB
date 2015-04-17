var express = require('express');
var router = express.Router();
function error(){ console.log('AAAAZZZZ');};
/* GET home page. */
router.get('/', function (req, res) {
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('tvdb', 'root', 'root', {
        host: "127.0.0.1",
        dialect: 'mysql',
        define: {
            timestamps: false,
        }
    });
    var models = require('sequelize-import')('models', sequelize, {
    });
    var async = require("async");
    async.parallel( {
            lingua: function (callback) {
    setTimeout(function () {
                models.languages.find(150).then(function (result) {
                    var aa = result.englishname;                    
                    callback(null, aa);
                    });
                }, 2000);
    },
    test: function (callback) {
        setTimeout(function () {
            callback(null, 'two');
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