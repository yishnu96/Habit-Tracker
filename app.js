// Importing Modules
const express = require('express')
const path = require('path');
const app = express()

const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');
const port = 5000

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    return res.render('layouts')
})

app.listen(port, () => {
  console.log(`Click this link to get started :  http://localhost:${port}`)
})