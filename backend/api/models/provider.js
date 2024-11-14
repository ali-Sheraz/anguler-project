const mongoose = require('mongoose');
const { providerschema } = require('../schemas/provider.schemas');

const provider= mongoose.model('provider',providerschema);
module.exports={provider} ;