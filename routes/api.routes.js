var express = require('express')

var router = express.Router()
var tree = require('./api/tree.route')

router.use('/tree', tree);

module.exports = router;