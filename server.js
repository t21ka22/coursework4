const express = require("express");
const bodyParser = require('body-parser')
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);

});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

//we use a set to store users, sets objects are for unique values of any type
const activeUsers = new Set();

io.on("connection", function (socket) {
  console.log("Made socket connection");

  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    //... is the the spread operator, adds to the set while retaining what was in there already
    io.emit("new user", [...activeUsers]);
  });

  socket.on("disconnect", function () {
      activeUsers.delete(socket.userId);
      io.emit("user disconnected", socket.userId);
    });

    socket.on("chat message", function (data) {
      io.emit("chat message", data);
  });

});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// index page
app.get('/testGet', function(req, res) {	
  let firstName = req.query.firstName
  let surname = req.query.surname
  
  res.send(`
           <!doctype html>
           <head>
           <title>Test GET</title> 
           </head>
           <body>
<strong> First Name:</strong>${firstName} <br>
<strong> Surname:</strong>${surname}
           </body> 
           `);
});


app.post('/testPost', function(req, res) {
	let firstName = req.body.firstName
    let surname = req.body.surname

res.send(`
           <!doctype html>
           <head>
           <title>Test POST</title> 
           </head>
           <body>
<strong> First Name:</strong>${firstName} <br>
<strong> Surname:</strong>${surname}
           </body> 
           `)
  
});


app.get('/test404', function(req, res) {
    
    res.status(404);
    res.send ('Not Found')
});

app.get('/test403', function(req, res) {
     res.status(403);
    res.send ('Forbidden')
});

app.get('/test500', function(req, res) {
    //something that breaks
    let b = z
    
});

app.post('/practical5', function(req, res) {
	let name = req.body.firstName
    let email = req.body.surname
    let gender = req.body.gender
    let genre = req.body.genre
    let username = req.body.username
    let message = req.body.message

res.send(`
           <!doctype html>
           <head>
           <title>Test POST</title> 
           </head>
           <body>
<strong> Name:</strong>${name} <br>
<strong> Email:</strong>${email}<br>
<strong> Gender:</strong>${gender}<br>
<strong> Genre:</strong>${genre}<br>
<strong> Message:</strong>${message}<br>
<strong> User Name:</strong>${username}
           </body> 
           `)
  
});

