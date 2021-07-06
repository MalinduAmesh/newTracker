const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dbConfig = require('./config/db.config')
const bodyPharse = require('body-parser')
const requireToken = require('./middleware/requireToken'); 



mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB. Update");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


app.use(bodyPharse.json())

const customer = require('./routes/CustomerRoutes')
const income = require('./routes/IncommeRoutes')

app.use('/customer',customer)
app.use('/income',income)   

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Tracker application." });
  });
  

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  