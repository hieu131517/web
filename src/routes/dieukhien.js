const express = require('express');
const router = express.Router();

const dkController = require('../app/controllers/DkController');

router.get('/:id', dkController.onoff);
router.get('/', dkController.dk);


module.exports = router;
