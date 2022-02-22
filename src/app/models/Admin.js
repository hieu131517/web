const mongoose = require ('mongoose');
const slug= require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete');
const Schema = mongoose.Schema;


const Admin= new Schema({
    name:{type:String,require: true,unique:true},
    password:{type:String,maxlength: 600},
   

   
})


module.exports = mongoose.model('Admin', Admin);