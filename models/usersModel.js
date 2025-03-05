const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        required:[true, 'Username is required'],
        unique:true,
    },email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;