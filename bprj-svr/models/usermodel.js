var mongoose = require('mongoose');
var { Schema } = mongoose; // model 생성을 위해 한번에 선언하지 않음


const userSchema = new Schema({
  usrId: String,
  password: String,
  token: String,
  bookIds: [Number],

});

// 토큰을 받아와야 한다.

module.exports = mongoose.model('User', bookSchema, 'userinfo');
