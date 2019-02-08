const express = require("express");

let  app = express();

app.get('/',(req,res)=>res.send("HELLO"));

app.listen(3000);