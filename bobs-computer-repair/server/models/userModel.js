const mongoose = require('mongoose');
  
const userSchema = new mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    phoneNumber: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,    
    dateCreated: {type: Date, default: Date.now },
    dateUpdated: {type: Date, default: Date.now },
    dateDeleted: {type: Date, default: Date.now }
},
    {collection: 'user'}
);

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}