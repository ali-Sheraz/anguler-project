const mongoose = require("mongoose");
const { provider } = require('../models/provider.js');
const connectionString = 'mongodb+srv://asherazali121823:ali121823@cluster0.yzsrcdh.mongodb.net/';

mongoose.connect(connectionString)
    .then(result => { console.log("Connected"); })


    .catch(error => console.log("Not Connected", error));

// provider.create(  {
   
//     "name": "sheraz",
//     "age": 23,
//     "city": {
//         "city_name": "kamalia",
//         "city_code": 5000,
//         "city_location": "north side",
//         "city_population": 700000
//     }
// },
// {
   
//     "name": "Ali khan",
//     "age": 22,
//     "city": {
//         "city_name": "Lahore",
//         "city_code": 500000,
//         "city_location": "north side",
//         "city_population": 600000
//     }
// });
module.exports = provider;
