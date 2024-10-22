const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/userData");
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    image:String
})
module.exports = mongoose.model('user',userSchema);