const mongoose = require('mongoose');
  
const userSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String,
    email: String,
    username: String,
    password: String,
    dateCreated: {type: Date, default: Date.now },
    dtaeUpdated: {type: Date, default: Date.now }
},
    {collection: 'user'}
);

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}