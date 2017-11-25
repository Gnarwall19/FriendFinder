// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//------------------------
// EXPRESS CONFIGURATION
//------------------------

// Set up express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//------------------------
//ROUTER
//------------------------

// Direct server to route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//------------------------
// LISTENER
//------------------------

// Starts server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});