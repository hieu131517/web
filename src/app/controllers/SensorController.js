const res = require('express/lib/response');
const Sensor= require('../models/Sensor');
const {mongooseToObject} =require('../../util/mongoose');
const { now } = require('mongoose');

class SensorController {
   show(req,res,next){
       Sensor.findOne({slug: req.params.slug})
        .then(sensor=>{
              res.render('sensors/show',{sensor:mongooseToObject(sensor)})
        })
      .catch(next);
   }

   lichsu(req,res,next){
      Sensor.findOne({slug: req.params.slug})
       .then(sensor=>{
             res.render('sensors/lichsu',{sensor:mongooseToObject(sensor)})
       })
     .catch(next);
  }

   create(req,res,next){
      res.render('sensors/create');
   }

   store(req,res,next){
      if(req.body.tsmax<=req.body.tsmin){res.send('Giới hạn không hợp lệ')}
      else{
      req.body.image=`http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const sensor= new Sensor(req.body);
      sensor.save()
            .then(()=> res.redirect('/me/stored/sensors'))
            .catch(error=>{
               
            })
         }
   }
   edit(req,res,next){
      Sensor.findById(req.params.id)
        .then(sensor=>{
              res.render('sensors/edit',{sensor:mongooseToObject(sensor)})
        })
      .catch(next);
   }

   update(req,res,next){
      Sensor.updateOne({_id : req.params.id},req.body)
        .then(()=>
              res.redirect('/me/stored/sensors')
        )
      .catch(next);
   }

   delete(req,res,next){
      Sensor.delete({_id : req.params.id})
         .then(()=> res.redirect('back'))
         .catch(next);
   }

   forceDelete(req,res,next){
      Sensor.deleteOne({_id : req.params.id})
         .then(()=> res.redirect('back'))
         .catch(next);
   }

   restore(req,res,next){
      Sensor.restore({_id : req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
   }

   data(req,res,next){
      Sensor.findOne({slug:req.params.slug})
      .then(sensor=>{sensor.thongso=req.query.data;
      
         sensor.lichsu.unshift(req.query.data);
         if(req.query.data>sensor.tsmax||req.query.data<sensor.tsmin){
            sensor.trangthai='Có sự cố'
         }
         else{sensor.trangthai='Bình thường'}
         var date = new Date();
         var x = date.getTime();
         sensor.ls.unshift(date+"  :   "+ req.query.data + sensor.donvi )
         
        sensor.thoidiem.unshift(date);
        sensor.time.unshift(x);
         sensor.save();
         res.send(req.query.data);
      })
    .catch(next);
   }

}
module.exports = new SensorController();
