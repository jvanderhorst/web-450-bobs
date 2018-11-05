const mongoose = require('mongoose');

  
const roleSchema = new mongoose.Schema({
    roleId: String,
    roleName: String,
    dateUpdated: {type: Date, default: Date.now },
},
    {collection: 'role'}
);

const Role = module.exports = mongoose.model('Role', roleSchema);

module.exports.getById = (id, callback) => {
    var query = {roleId: id};
    Role.findById(query, callback);
}

module.exports.add = (role,callback) => {
    role.save(callback);
}

module.exports.getOne = (r, callback) => {
    var query = {role: r};
    Role.findOne(query, callback);
}