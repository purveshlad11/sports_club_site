console.log("now i'm inside membermodel")
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birthdate:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    },

    prob_details:{
        type:String,
        required:function validate(){
            if (this.problem === 'Yes') {
                return true
            }
            else{
                return false
            }
        }
        
        
    }
});


module.exports = mongoose.model('member', memberSchema);