var express = require('express');
var router = express.Router();

/* GET PS3 page. */
router.route('/')
    .get((req, res, next) => {
        res.render('pugPS3', {string: 'Today you are You, that is truer than true. There is no one alive who is Youer than You.'})
    })
    .post((req, res, next) => {
        res.render('pugPS3', {string: req.body.string, length: req.body.string.length});
    });

module.exports = router;
