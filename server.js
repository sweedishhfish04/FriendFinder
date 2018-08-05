var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');
global.__basedir = __dirname;

var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
apiRoutes.register(app);
htmlRoutes.register(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});