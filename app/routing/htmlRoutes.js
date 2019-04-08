
var path = require("path");

// export/expose these URLS
module.exports = function (app) {

    // dish up our survey.html if user hits the survey URL
    app.get("/survey", function (req, res) {

        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.json(path.join(__dirname, "/../public/home.html"));

    });

    // dish up our home.html for any other path
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}