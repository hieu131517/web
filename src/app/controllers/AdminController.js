const res = require('express/lib/response');
const Admin= require('../models/Admin');
const {mongooseToObject} =require('../../util/mongoose');

class AdminController {
    login(req, res) {
        res.render('login');
    }

    check(req, res,next) {
        Admin.findOne({name:req.body.name, password:req.body.password})
            .then(admin=>{
                if(admin==null){res.send('Tài khoản không chính xác')}
                else res.redirect('/me/stored/sensors');
              })
            .catch(next);
    }   
    }


module.exports = new AdminController();
