var mongoose = require('mongoose');
var { Schema } = mongoose; // model 생성을 위해 한번에 선언하지 않음


const userSchema = new Schema({
  username : String,
  password : String
});

module.exports = mongoose.model('userinfo', userSchema, 'userinfo');
