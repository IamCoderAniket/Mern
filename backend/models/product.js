const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema
const category = require("./category")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    }, 
    description:
    {
       type:String,
       trim:true,
       required:true,
       maxlenth:3000

    },
    price:
    {
        type:Number,
        required:true,
        maxlength:32,
        trim:true
    },
    category:
    {
        type: ObjectId,
        ref:"Category",
        required:true
    },
    stock:
    {
        type:Number,
    },
    sold:{
        type:Number,
        contentType:String
    },
    photo:
    {
        data:Buffer,
        contentType:String
    }
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)