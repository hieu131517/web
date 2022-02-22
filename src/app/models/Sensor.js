const mongoose = require ('mongoose');
const slug= require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete');
const Schema = mongoose.Schema;


const Sensor= new Schema({
    name:{type:String,require: true},
    description:{type:String,maxlength: 600},
    image:{type:String},
    donvi:{type:String},
    diadiem:{type:String},
    trangthai:{type:String},
    tsmax:{type:Number},
    tsmin:{type:Number},
    videoId:{type: String},
    thongso:{type: Number},
    lichsu:{type:Array},
    thoidiem:{type: Array},
    ls:{type:Array},
    time:{type: Array},
    slug:{type:String, slug:'name',unique:true},

   
},{
    timestamps:true,
})

mongoose.plugin(slug);
Sensor.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods:'all'});

module.exports = mongoose.model('Sensor', Sensor);