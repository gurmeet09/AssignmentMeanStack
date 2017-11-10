var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var Seasons_Schema = new Schema({
    season_name: {type: String},
    season_data:{type:String},
    series_id:{type:Number},
    season_id: {type: Number},
    season_image: {type: String},
    starts_on:{type: String},
    ends_On:{type: String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Season', Seasons_Schema);