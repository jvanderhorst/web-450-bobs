const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
  
const userSchema = new mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    phoneNumber: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: String,    
    dateCreated: {type: Date, default: Date.now },
    dateUpdated: {type: Date, default: Date.now },
    dateDeleted: {type: Date, default: Date.now },
    saltSecret: String
    
},
    {collection: 'user'}
);

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

module.exports.add = (user,callback) => {
    user.save(callback);
}

module.exports.getOne = (e, callback) => {
    var query = {username: e};
    User.findOne(query, callback);
}

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ username: this.username},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}