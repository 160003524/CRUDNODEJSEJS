const path = require('path');
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const app = express();

//connecting database
mongoose
  .connect(
    'mongodb+srv://andrescrudnodejs:C4c905aBB9JmJocc@nodejscrud.lbqfd.mongodb.net/test'
  )
  .then((db) => console.log('Connected'))
  .catch(console.log('Error'));
//importing routes
const indexRoutes = require('./routes/index');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/', indexRoutes);

//starting server

app.listen(app.get('port'), () => {
  console.log(`Puerto: ${app.get('port')}`);
});
