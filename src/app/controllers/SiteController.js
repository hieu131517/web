const res = require('express/lib/response');
const Sensor= require('../models/Sensor');
const {mutipleMongooseToObject} =require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Sensor.find({})
            .then(sensors=>{
                res.render('home',{
                    sensors: mutipleMongooseToObject(sensors)
                });
            })
            .catch(next);
        }
    

    search(req, res) {
        res.render('search');
    }

    find(req,res,next){
        var regex= new RegExp(req.body.name,'i');
        Sensor.find({name:regex})
             .then(sensors=>{
                     res.render('searchname',{
                      sensors: mutipleMongooseToObject(sensors)
                     });
             })
            .catch(next=>res.send('Không tìm thấy kết quả'));
    }

}
module.exports = new SiteController();
