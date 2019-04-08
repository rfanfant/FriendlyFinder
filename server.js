// require express package
var express = require('express');

// instantiate an express instance
var app = express();
// require body-parser package
var bodyParser = require('body-parser');

// setup for hosting port as well as local
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({type: 'text/html' }));

// include our required routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


// start listening to our port
app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
});