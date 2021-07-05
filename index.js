const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 3000
const bodyPharse = require('body-parser')

mongoose.connect('mongodb://localhost/new')
.then(function (){
    console.log('connected to The Database')
})
.catch(function(){
    console.log('Could not connected to the DB')
})


app.use(bodyPharse.json())

const customer = require('./routes/CustomerRoutes')
const income = require('./routes/IncommeRoutes')

app.use('/customer',customer)
app.use('/income',income)   

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Tracker application." });
  });
  

app.listen(port,()=>{
    console.log("Server Strted NOW")
})