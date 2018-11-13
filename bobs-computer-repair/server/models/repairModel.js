const mongoose = require('mongoose');

  
const repairSchema = new mongoose.Schema({
    repairId: String,
    repairName: String,
    price: Number,
},
    {collection: 'repair'}
);

const Repair = module.exports = mongoose.model('Repair', repairSchema);

module.exports.getById = (id, callback) => {
    var query = {repairId: id};
    Repair.findById(query, callback);
}

module.exports.add = (repair, callback) => {
    repair.save(callback);
}

module.exports.getOne = (r, callback) => {
    var query = {repair: r};
    Repair.findOne(query, callback);
}