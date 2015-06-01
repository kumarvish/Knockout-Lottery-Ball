var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index/home', {state:'/',title: 'Lottery App' });
});

module.exports = router;
