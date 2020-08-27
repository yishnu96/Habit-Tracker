// Importing Modules
const express = require('express')
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');



const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Click this link to get started :  http://localhost:${port}`)
})