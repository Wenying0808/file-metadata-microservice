var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

// Cross-Origin Resource Sharing
// adds the CORS middleware to your Express application, enabling CORS for all routes. This allows the server to handle requests from any origin.
app.use(cors()); 
// serve static route
app.use('/public', express.static(process.cwd() + '/public'));
// define the root route
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
