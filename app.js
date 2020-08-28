// Importing Modules
const express = require('express')
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const mongoose = require('mongoose');
const db= require('./config/mongoose');
const port = 5000


// ------SCSS ------//
app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, './assets/sass'),
  dest: path.join(__dirname, './assets/css'),
  debug: true,
  outputStyle: 'expanded',
  prefix:  '/css' 
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

// ------Statics files ------ //
app.use(express.static(path.join(__dirname,'./assets')))
app.use(express.urlencoded());

// ----------EJS-----------//
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// ------Router------------//
app.use('/',require('./routers/index'))


app.listen(port, () => {
  console.log(`Click this link to get started :  http://localhost:${port}`)
})