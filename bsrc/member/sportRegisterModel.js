console.log("now i'm inside registerModel");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sport:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('register',registerSchema);  