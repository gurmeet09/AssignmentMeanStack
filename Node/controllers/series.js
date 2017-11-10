var Series =  require('../models/series');
exports.postSeries = function (req, res) {
    console.log("post")
    var series = new Series({
        series_name: req.body.series_name,
        series_description: req.body.series_description,
        series_id: req.body.series_id,
        series_image:req.body.series_image,
        created_date: new Date(),
        updated_date: new Date(),
});

series.save(function (err, response) {
    console.log("hello");
    if(err) {
    return res.json(err);
    }

    else
    res.json({"status": true, body: response})
    })


}

exports.getSeries=function(req,res) {
    Series.find({},function(err,response) {
    if(err) {
    return res.json(req,res,err);
    }
    res.json(response);
    })
    }
    
exports.deleteSeries=function(req,res) {
    var series_id =req.params.series_id;
    Series.findOne({ series_id: series_id },function(err,series) {
    if(err) {
    res.json(err);
    }
    if(series) {
    Series.remove({ series_id: series_id },function(err) {
        if(err) {
            res.json(err);
            }

            res.json({
            "status": true,
            "respData": {
            "data": "success"
            }
            });
            })
            } else {
                console.log('res',res)
            res.json({
            "status": false,
            "respData": {
            "data": "User Does not Exist"
            }
            })
    }
})
}
