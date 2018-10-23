var express = require('express');
var router = express.Router();
var Info = require("../models/info");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/sendinfo", function(req, res, next) {
    
        function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var x = makeid();
    
    var newinfo = new Info ({
        
        username: x,
        Day: req.body.day,
        Month: req.body.month,
        Year: req.body.year
        
        
        
    });
    
    console.log(newinfo);
    newinfo.save();
    
    res.redirect("/done");
    
});


router.get("/done", function(req, res, next) {
    
   res.render("done"); 
    
});

module.exports = router;
