var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ethereum"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});


// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM blocksize;", function(err, data) {
//         if (err) {
//             throw err;
//         }
//
//         res.render("index", { plans: data });
//
//     });
// });
// app.post("/", function(req, res) {
//     connection.query("INSERT INTO blocksize (blocksize) VALUES (?)", [req.body.plan], function(err, result) {
//         if (err) {
//             throw err;
//         }
//
//         res.redirect("/");
//     });
// });

app.listen(port);

//Psuedocode,
//**Visualizing data**
//need to GET database data from the mysql server.
//Then need to POST the data to the controller.
//get data from controller and post to the view

// **manipulating data**
//get userinput from the view and post to the  controller and then post data to
// module and then manipulate the server based on that
//post to the index.handlebars?? or test.html
//set routes from

//**for queries**
//need to join two tables info.

