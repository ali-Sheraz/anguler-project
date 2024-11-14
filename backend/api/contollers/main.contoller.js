var info = require('../models/providers.model');
const db = require('../db/db');
const {ObjectID } =require('mongodb');
const mongoose = require("mongoose");
function handleError(res, error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
module.exports.readAll = function (req, res) {
    try {
        db.find()
        // .limit(2)
            .then(result => {
                if (isEmpty(result )) {
                  
                    return res.status(404).json({ error: 'List is empty' });
                }
                res.status(200);
                res.send(result);

            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        console.log(error);
    }



}


function isEmpty(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);

}
// function existId(id) {
//     return info.find(provider => provider.id == id);
// }
// Function to generate a unique provider ID
// function getUniqueId(info) {
//     let min = 100000;
//     let max = 999999


//     do {
//         var id = Math.floor(Math.random() * (max - min) + min);
//     } while (existId(id)); // Ensure the ID is not already in use

//     return id;
// }


module.exports.readOne = function (req, res) {
    try{
    let id = (req.params.id);
    db.find({'id':id})
    .then(result=>{
        if (isEmpty(result)) {
            return res.status(404).json({ error: 'List is empty' });
        }
        res.status(200);
        res.send(result);
    })
    .catch(error=>handleError(res,error))
 
  


    // Find the provider with the matching id
    // let provider = info.find(provider => provider.id == id);

   
}
    catch (error) {
        console.log(error);
    }

}
module.exports.update = async function (req, res) {
    // db.findOneAndUpdate({'_id':id},{$set:req.body},{new:true})
    try{
        let id = (req.params.id);
        let provider=req.body;
        db.findOneAndUpdate({'id':id},provider,{new:true})
        .then(result=>{
            if (isEmpty(result)) {
                return res.status(404).json({ error: 'List is empty:cannot Update' });
     }

            res.status(200);
            res.send(result);
        })
        .catch(error=>handleError(res,error))
    
   

    // Find the provider with the matching id
    // let provider = info.find(provider => provider.id == id)

    // provider.name = req.body.name;
    // provider.age = req.body.age;
    // provider.city.city_name = req.body.city.city_name;
    // provider.city.city_code = req.body.city.city_code;
    // provider.city.city_location = req.body.city.city_location;
    // provider.city.city_population = req.body.city.city_population;

  
}
catch (error) {
    console.log(error);
}
}
module.exports.create = async function (req, res) {

 try{
    // if (isEmpty(id)) {
    //     info = [];


    // }
    var provider = req.body;
    db.create(provider)
    .then(result=>{
        res.status(201).send(result);

    })
 .catch(error=>handleError(res,error));
    // var id = req.body.id;
    // if (existId(id)) {
    //     res.status(400);
    //     res.send("Duplicate");
    //     id = getUniqueId();
    // }
    
    //provider.id = id;
    // info.push(provider);
    // Find the provider with the matching id
    // let provider = {
    //     id: id,
    //     name: req.body.name,
    //     age: req.body.age,
    //     city: {
    //         city_name: req.body.city.city_name,
    //         city_code: req.body.city.city_code,
    //         city_location: req.body.city.city_location,
    //         city_population: req.body.city.city_population,
    //     }
    // }



}
catch (error) {
    console.log(error);
}
}

module.exports.deleteOne = function (req, res) {
    try{
        let id =(req.params.id);
        db.findOneAndDelete({'id':id})
        .then(result=>{
            if (isEmpty(result)) {
                return res.status(404).json({ error: 'List is empty:cannot Delete' });
            }
            res.status(200);
            res.send(result);
        })
        .catch(error=>handleError(res,error));
   
    // let id = req.params.id;

    // Find the provider with the matching id
    // let provider = info.findIndex(provider => provider.id == id);

    // info.splice(provider, 1);

    // console.log("Provider  found");

   
}

catch(error){
console.log(error);
}
}
let count = 0;
let blockedTime = 0;

module.exports.login = async function (req, res) {
    try {
      const name = req.body.name; // Use req.body.name to access the name from the request body
      console.log("form name:",name);
      const currentTime = Date.now();
    
      // Check if the user is still blocked
      if (currentTime < blockedTime) {
        const timeToWait = Math.ceil((blockedTime - currentTime) / 1000);
        return res.status(403).send(`Too many failed attempts. Try again after ${timeToWait} seconds.`);
      }
  
      const user = await db.findOne({ 'name': name });
  
      if (user) {
        // Reset the failed attempts count on successful login
        count = 0;
        return res.status(200).send(user);
      } else {
        count++;
  
        if (count > 4) {
          // Block the user for 30 seconds
          blockedTime = currentTime + 30000;
          const timeToWait = Math.ceil((blockedTime - currentTime) / 1000);
          count=0;
          return res.status(403).send(`Too many failed attempts. Try again after ${timeToWait} seconds.`);
        } else {
          return res.status(403).send('Invalid credentials');
        }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send('An error occurred.');
    }
  }
  
  

  
module.exports.deleteAll = function (req, res) {
    try{
        db.deleteMany()
        .then(result=>{ 
             if (result.deletedCount===0) 
             {
                return res.status(404).json({ error: 'List is empty:cannot Delete' });
        }
        res.status(200);
        res.send("Deleted .\n "+result);

        })
        .catch(error=>handleError(res,error));
  
    // info = [];





   
}
catch(error)
{
    console.log(error);
}
}



// var info = require('../models/providers.model');

// module.exports.readAll = function (req, res) {
//     if(isEmpty(info))
//     {
//     res.status(404);
//     res.send('List is Empty');
//     }
//     res.send(info);
    
// }


// function isEmpty(obj) {
//     return (!obj || obj.length == 0 || Object.keys(obj).length == 0);

// }
// function existId(id) {
//     return info.find(provider => provider.id == id);
// }
// // Function to generate a unique provider ID
// function getUniqueId(info) {
//     let min = 100000;
//     let max = 999999


//     do {
//         var id = Math.floor(Math.random() * (max - min) + min);
//     } while (existId(id)); // Ensure the ID is not already in use

//     return id;
// }


// module.exports.readOne = function (req, res) {
//     if(isEmpty(info))
//     {
//     res.status(404);
//     res.send('List is Empty');
//     }
//     let id = req.params.id;


//     // Find the provider with the matching id
//     let provider = info.find(provider => provider.id == id);

//     res.status(200);

//     res.send(provider);
// }
// module.exports.update = async function (req, res) {
//     if(isEmpty(info))
//     {
//     res.status(404);
//     res.send('List is Empty.cannot Update');
//     }

//     let id = req.params.id;

//     // Find the provider with the matching id
//     let provider = info.find(provider => provider.id == id)

//     provider.name = req.body.name;
//     provider.age = req.body.age;
//     provider.city.city_name = req.body.city.city_name;
//     provider.city.city_code = req.body.city.city_code;
//     provider.city.city_location = req.body.city.city_location;
//     provider.city.city_population = req.body.city.city_population;

//     res.status("updated", 200);
//     res.send(provider);
// }
// module.exports.create = async function (req, res) {

//     // Generate a random number between 0 and 1000
//     if (isEmpty(id)) {
//         info = [];


//     }

//     var id = req.body.id;
//     if (existId(id)) {
//         res.status(400);
//         res.send("Duplicate");
//         id = getUniqueId();
//     }
//     var provider = req.body;
//     provider.id = id;
//     info.push(provider);
//     // Find the provider with the matching id
//     // let provider = {
//     //     id: id,
//     //     name: req.body.name,
//     //     age: req.body.age,
//     //     city: {
//     //         city_name: req.body.city.city_name,
//     //         city_code: req.body.city.city_code,
//     //         city_location: req.body.city.city_location,
//     //         city_population: req.body.city.city_population,
//     //     }
//     // }


//     res.status(200);
//     res.send(provider);
// }

// module.exports.deleteOne = function (req, res) {
//     if(isEmpty(info))
//     {
//     res.status(404);
//     res.send('List is Empty.Cannot Delete ');
//     }
//     let id = req.params.id;

//     // Find the provider with the matching id
//     let provider = info.findIndex(provider => provider.id == id);

//     info.splice(provider, 1);

//     console.log("Provider  found");

//     res.status(200);
//     res.send(provider);
// }
// module.exports.deleteAll = function (req, res) {
//     if(isEmpty(info))
//     {
//     res.status(404);
//     res.send('List is Empty.Cannot Delete ');
//     }
//     info = [];





//     res.status(200);
//     res.send("Deleted");
// }


