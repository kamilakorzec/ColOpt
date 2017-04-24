var express    = require('express');
var app        = express();
var fs = require("fs");

app.use(express.static('frontend'));

var port = process.env.PORT || 9000;

// ROUTES FOR API
// =============================================================================
var router = express.Router();

app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on ' + port);