const express = require('express');
const router = express.Router();

const sensorController = require('../app/controllers/SensorController');

router.get('/create', sensorController.create);
router.get('/:slug/lichsu', sensorController.lichsu);
router.get('/:id/edit', sensorController.edit);
router.put('/:id', sensorController.update);
router.patch('/:id/restore', sensorController.restore);
router.delete('/:id', sensorController.delete);
router.delete('/:id/force', sensorController.forceDelete);
router.post('/store', sensorController.store);
router.post('/:slug', sensorController.data);
router.get('/:slug', sensorController.show);

module.exports = router;
