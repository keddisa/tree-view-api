var express = require('express');
var router = express.Router();

var TreeController = require('../../controllers/tree.controller.js');

router.get('/', TreeController.getTree);
router.post('/', TreeController.createFactory);
router.put('/', TreeController.updateFactory);
router.delete('/:id', TreeController.removeFactory);

module.exports = router;