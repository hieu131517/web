const res = require('express/lib/response');
const Sensor= require('../models/Sensor');
const {mongooseToObject, mutipleMongooseToObject} =require('../../util/mongoose');

class MeController {

  
  storedSensors(req,res,next){


     Sensor.find({})
     .then(sensors=> res.render('me/stored-sensors',{
        sensors:mutipleMongooseToObject(sensors)
     }))
     .catch(next);
  }
   
  trashSensors(req,res,next){
   Sensor.findDeleted({})
   .then(sensors=> res.render('me/trash-sensors',{
      sensors:mutipleMongooseToObject(sensors)
   }))
   .catch(next);
  }

}
module.exports = new MeController();
