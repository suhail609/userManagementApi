var express = require('express');
var router = express.Router();
const controller = require('../controller/SignUp')

/* GET home page. */
router.post('/', controller);

module.exports = router;
