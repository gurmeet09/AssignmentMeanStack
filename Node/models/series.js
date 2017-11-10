var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema

var Series_Schema = new Schema({
    
    series_id: {type: Number},
    series_name: {type: String},
    series_image:{type:String},
    series_description:{type:String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Series', Series_Schema);