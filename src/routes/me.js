const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/sensors', meController.storedSensors);
router.get('/trash/sensors', meController.trashSensors);

module.exports = router;
