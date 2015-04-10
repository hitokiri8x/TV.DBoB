var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log('risultato');
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
    var aaa;
    models.languages.find(15).then(function (result) {
        console.log(result.englishname);
        aaa = result.englishname;
        console.log(aaa);
    });
   
    //console.log(models.languages.find(15));
    res.render('index', { title: aaa });
});

module.exports = router;