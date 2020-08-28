const Habit = require('../models/Habit');


// This function finds each and every habit in the list and renders it.
module.exports.load = function(req,res) {
    Habit.find({},function(err,habit){
        if(err){
            console.error("Cannot Fetch data from Database");
            return;
        }
        else{
            return res.render('layout',{habit_list: habits })
        }
    })
}

// This function helps in adding a habit in list.
module.exports.add = function (request, response) {
    request.body.record_tracker = {};
    request.body.user = "AnyUser";
    console.log(request.body);
    Habit.create(request.body, function (err, newhabit) {
        if (err) {
            console.error("Cannot Create Data");
            return;
        }
        else {
            console.log(newhabit);
            return response.redirect("back");
        }
    })
}