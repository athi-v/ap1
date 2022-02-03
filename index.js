//jshint esversion:6

const express = require("express");
const app = express();
const posts = require('./posts')

app.get('/posts', function(req, res)
{
res.json(posts);
});


app.get('/', function(req, res)
{
res.sendFile(__dirname + '/index.html');
});



app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
  