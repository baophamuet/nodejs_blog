const   mongoose =  require('mongoose');

const Schema =  mongoose.Schema;

const Course = new Schema ({
    name:{type : String, default:''} ,
    desciption:{type : String, default:''} ,
    image:{type : String, default:''} ,
    createdAt:{type: Date, default: Date.now}
})

module.exports = mongoose.model('Course',Course);