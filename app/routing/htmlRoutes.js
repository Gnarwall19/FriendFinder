// Dependencies

// Include path package to get the correct file path for the HTML
var path = require("path");

//------------------------
// ROUTING
//------------------------

module.exports = function (app) {
    // GET route to display survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Defaults to home if no matching route is found
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}