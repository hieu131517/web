const mongoose = require ('mongoose');
const slug= require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete');
const Schema = mongoose.Schema;


const Dk= new Schema({
   name:{type:String,require: true,unique:true},
   trangthai:{type:Boolean},
   onoff:{type:String},
   

   
})


module.exports = mongoose.model('Dk', Dk);