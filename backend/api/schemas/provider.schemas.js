const mongoose = require('mongoose');
const schemas = mongoose.Schema;
const cityschema = new schemas({
    "city_name": { type: String, required: true },
    "city_code": { type: String, required: true, min: 5 },
    "city_location": { type: String, required: true },
    "city_population": { type: Number }
})
const providerschema = new schemas({
    "id": { type: Number, required: true,unique:true },
    "name": { type: String, required: true,unique:true },
    "age": { type: Number },
    "city": cityschema

});
module.exports = {providerschema,cityschema};


// const mongoose = require('mongoose');
// const schemas = mongoose.Schema;



// // const cityschema = new schemas({
// //     "city_name": { type: String, required: true },
// //     "city_code": { type: String, required: true, min: 5 },
// //     "city_location": { type: String, required: true },
// //     "city_population": { type: Number }
// // })
// // const providerschema = new schemas({
// //     "id": { type: Number, required: true,unique:true },
// //     "name": { type: String, required: true,unique:true },
// //     "age": { type: Number },
// //     "city": cityschema,
// //     "failed_login_attempts": { type: Number, default: 0 } 

// // });
// // module.exports = {providerschema,cityschema};