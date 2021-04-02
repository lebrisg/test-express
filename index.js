// index.js

const express    = require('express');
const bodyParser = require('body-parser');
const routes     = require('./routes');
const config     = require('./config');

const app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
     res.json({ message: 'hooray! welcome to our api!' });   
});
 
app.use('/api', routes);

app.listen(config.app.port);
console.log('Express API running on port ' + config.app.port);
