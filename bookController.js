// bookController.js

Book = require('./bookModel');

exports.index = function (req, res) {
  Book.get(function (err, books) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "Success"
      data: books
    });
  });
};
