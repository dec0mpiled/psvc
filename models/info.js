var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Info = new Schema({
    
    username: String,
    Day: Number,
    Month: String,
    Year: Number,
    
});

Info.plugin(passportLocalMongoose);

module.exports = mongoose.model('info', Info);