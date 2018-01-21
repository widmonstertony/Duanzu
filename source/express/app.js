var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// respond with "hello world" when a GET request is made to the homepage
app.post('/api/change_password', require("./routes/change_password"));
app.post('/api/login', require("./routes/login"));

app.listen(3000);
