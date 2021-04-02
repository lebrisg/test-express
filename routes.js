const express = require('express');
const book   = require('./bookController');
const router = express.Router();

router.use('/book', book);

module.export = router;
