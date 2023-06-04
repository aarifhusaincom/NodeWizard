const express = require('express')
const app = express()
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect( (err) =>  {
  if (err)  throw err ;{
      console.log("Connected!");
  } 

});

app.listen(3000)