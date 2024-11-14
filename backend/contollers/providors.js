let info = require('../models/providers');

module.exports.list = function (req, res) {
    res.render('providers/provider-list', { title: 'Service provider', prov: info })
}




module.exports.details = function (req, res) {
    let id = req.params.id;


    // Find the provider with the matching id
    let provider = info.find(provider => provider.id == id);



    res.render('providers/providers-details', {


        id: id,
        title: 'Service provider',
        city: provider.city  // Use provider instead of providers
    });
}

module.exports.delete = function (req, res) {
    let id = req.params.id;

    // Find the provider with the matching id
    let provider = info.findIndex(provider => provider.id == id);
    if (provider !== -1) {
        info.splice(provider, 1);

        console.log("Provider  found");


        res.render('providers/providers-delete', { message: "Data Deleted " });
    }
    else {
        console.log("Provider not found");
        // Render the list of providers with an error message
        res.render('providers/providers-delete', {
            message: 'Provider not found'
        });
    }



}

module.exports.edit = function (req, res) {
    let id = req.params.id;


    // Find the provider with the matching id
    let provider = info.find(provider => provider.id == id);

    // console.log("check", provider);

    res.render('providers/providers-edit', {


        id: id,
        title: 'Edit',
        city: provider // Use provider instead of providers
    });
}
module.exports.update = async function (req, res) {

    let id = req.params.id;
    let name = req.body.name;
    console.log("name new", name)
    // Find the provider with the matching id
    let provider = info.find(provider => provider.id == id)

    provider.name = req.body.name;
    provider.age = req.body.age;
    provider.city.city_name = req.body.city_name;
    provider.city.city_code = req.body.city_code;
    provider.city.city_location = req.body.city_location;
    provider.city.city_population = req.body.city_population;
    console.log("updateedd data ", provider.name)

    res.render('providers/providers-update', {

        title: 'Update',

    });
}

module.exports.addform = async function (req, res) {

    
    res.render('providers/providers-add', {

        title: 'Add',


    });
}
module.exports.add = async function (req, res) {
const check=req.body;
console.log("req.body",check.name);
res.send(check);
    // Generate a random number between 0 and 1000
    const id = Math.floor(Math.random() * 2);

   


    // Find the provider with the matching id
    let provider = {
        id: id,
        name: req.body.name,
        age: req.body.age,
        city: {
            city_name: req.body.city_name,
            city_code : req.body.city_code,
            city_location : req.body.city_location,
            city_population : req.body.city_population,
        }
    }
    info.push(provider);
    console.log("Add data ",info)

    res.render('providers/providers-add-data', {

        title: 'Add',

    });
}
