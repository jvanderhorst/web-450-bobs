const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const config = require('../helpers/config');



exports.index = function(req, res, next) {
    res.json("Home Controller works!")
  };

exports.getAll = function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}

exports.register = function(req, res, next){
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var newUser = new User({
  userId: req.body.userId,
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email,
  username: req.body.username,
  password: hashedPassword,
  phoneNumber: req.body.phoneNumber,
  streetAddress: req.body.streetAddress,
  city: req.body.city,
  state: req.body.state,
  zipCode: req.body.zipCode  
  });
  User.add(newUser, (err, user) => {
    if (err)
        return res.status(500).send('There was a problem registering the user.');

    var token = jwt.sign({ id: user.userId}, config.web.secret, {
        
    });

    res.status(200).send({ auth: true, token: token });
});
}

// Verify token on GET
exports.userToken = function(req, res) {
  User.getById(req.userId, function(err, user) {
      if (err) return res.status(500).send('There was a problem finding the user.');

      if (!user) return res.status(404).send('No user found.');

      res.status(200).send(user);
  });
};

exports.userLogin = function(req, res) {

  User.getOne(req.body.email, function(err, user) {
      if (err) return res.status(500).send('Error on server.');
      if (!user) return res.status(404).send('No user found.');
      var hashedPassword = bcrypt.hashSync(user.password, 8);
      var passwordIsValid = bcrypt.compareSync(req.body.password, hashedPassword);

      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null});

      var token = jwt.sign({ id: user.userId}, config.web.secret, {
         
      });

      res.status(200).send( {auth: true, token: token });
  })
};

// Logout an existing user
exports.userLogout = function(req, res) {
  res.status(200).send({ auth: false, token: null});
};

exports.update = function (req, res, next) {
  User.update(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}

