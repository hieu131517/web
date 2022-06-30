const res = require('express/lib/response');
const Dk= require('../models/Dk');
const {mongooseToObject, mutipleMongooseToObject} =require('../../util/mongoose');

class DkController {
    dk(req, res,next) {
        Dk.find({})
        .then(dks=> res.render('dieukhien',{
           dks:mutipleMongooseToObject(dks)
        }))
        .catch(next);
    }

    onoff(req,res,next){
        Dk.findById(req.params.id)
         .then(dk=>{
                dk.trangthai=!dk.trangthai;
                if(dk.trangthai==true){dk.onoff="on"};
                if(dk.trangthai==false){dk.onoff="off"};
                dk.save()
//res.send(dk.trangthai);
               // console.log(dk.onoff)
               res.redirect('/dieukhien');
         })
       .catch(next);
    }

    }

    
    


module.exports = new DkController();
