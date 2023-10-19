var mongoose = require('mongoose');
var { Schema } = mongoose; // model 생성을 위해 한번에 선언하지 않음


const bookSchema = new Schema({
  id: Number,
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
});

module.exports = mongoose.model('Book', bookSchema, 'bookdum');
