// bookModel.js

const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  published: {
    type: Date
  }
});

var Book = module.exports = mongoose.model('book', bookSchema);
