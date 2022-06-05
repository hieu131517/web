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

  findday(req,res,next){
   var regex= new RegExp(req.query.day);
   var y=new Date(regex);
   var x=y.getTime();
   var day=y.getFullYear()+'-'+(y.getMonth()+1)+'-'+y.getDate();

   var dataday=[];
   Sensor.findOne({slug: req.params.slug})
   .then(sensor=>{
         const data=sensor.ls;

         var a=data.length;
         for (var b=0;b<a;b++){
            if(data[b].search(day)!=-1){
               dataday.push(data[b]);
            }

         }  
     
       
         res.render('sensors/lsday',{dataday});
         
   })
       .catch(next=>res.send('Không tìm thấy kết quả'));
}


   create(req,res,next){
      res.render('sensors/create');
   }

   store(req,res,next){
      var a=Number(req.body.tsmax);
      var b=Number(req.body.tsmin);

      if(a <= b){res.send('Giới hạn không hợp lệ')}
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
         var date  = new Date();
         var x = date.getTime();
         var y = date.getTime()+7*3600000;
         var date2  = new Date(y);

         
         var date3=date2.getFullYear()+'-'+(date2.getMonth()+1)+'-'+date2.getDate();
         var time3=date2.getHours()+":"+date2.getMinutes()+":"+date2.getSeconds();
         var dateTime='Thời gian: '+time3+',  '+date3;

         sensor.ls.unshift(dateTime+" : "+ req.query.data + sensor.donvi )
         
        sensor.thoidiem.unshift(dateTime);
        sensor.time.unshift(x);
         sensor.save();
         res.send(req.query.data);
      })
    .catch(next);
   }

}
module.exports = new SensorController();
