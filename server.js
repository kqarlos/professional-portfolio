const express = require("express");
// var db = require("./models");

var PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handlebars
const handlebars = require("express-handlebars");
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();

app.engine("handlebars", handlebars(
    {
        helpers: multihelpers,
        defaultLayout: "main"
    })
);

// app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var db = require("./models");

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


// db.sequelize.sync().then(function () {

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// });