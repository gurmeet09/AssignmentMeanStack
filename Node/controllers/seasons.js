var Season = require('../models/seasons');


exports.postSeason = function (req, res) {
    var season = new Season({
        season_name: req.body.season_name,
        season_data: req.body.season_data,
        series_id: req.body.series_id,
        season_id: req.body.season_id,
        season_image: req.body.season_image,
        starts_on: req.body.starts_on,
        ends_on: req.body.ends_on,
        created_date: new Date(),
        updated_date: new Date(),
});


season.save(function (err, response) {
    console.log("hello");
    if (err) {
        return res.json(err)
      }
  
      
        res.json({
            success: true,
            body: response
            })
    console.log("response",response);  

    })


}

exports.getSeason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json(err);
        }

        res.json(response);
    })
}
