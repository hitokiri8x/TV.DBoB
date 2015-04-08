var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource' + req.query.q);
});

router.get('/', function (req, res) {
    res.send('respond with a resource' + req.query.q);
});


module.exports = router;