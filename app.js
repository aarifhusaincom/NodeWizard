const express = require('express')
const app = express()
var mysql = require('mysql');


// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here
// Write your code here



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
