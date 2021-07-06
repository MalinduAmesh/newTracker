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

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

app.use(bodyPharse.json())

const customer = require('./routes/CustomerRoutes')
const income = require('./routes/IncommeRoutes')

app.use('/customer',customer)
app.use('/income',income)   

// simple route
app.get('/', requireToken, (req, res) => {
	const data = req.users.email;
	const data2 = req.users._id;
	res.send(data2);
});
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  