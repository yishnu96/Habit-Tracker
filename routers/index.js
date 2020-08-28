const express = require('express');
const router = express.Router();
// const Habit = require('../models/habit');

router.get('/',function(req,res){
    res.render('layouts')
})

module.exports = router;