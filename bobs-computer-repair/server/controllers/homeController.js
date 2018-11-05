const User = require('../models/userModel');
const Role = require('../models/roleModel');
const Repair = require('../models/repairModel');
const Question = require('../models/questionModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const config = require('../helpers/config');

exports.index = function(req, res, next) {
    res.json("Home Controller works!")
  };
// get all users
exports.getAll = function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}
// register new user
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
  User.getById(req._id, function(err, user) {
      if (err) return res.status(500).send('There was a problem finding the user.');

      if (!user) return res.status(404).send('No user found.');

      res.status(200).send(user);
  });
};
// User login
exports.userLogin = function(req, res) {

  User.getOne(req.body.username, function(err, user) {
      if (err) return res.status(500).send('Error on server.');
      if (!user) return res.status(404).send('No user found.');
      
      var hashedPassword = bcrypt.hashSync(user.password, 8);
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null});

      var token = jwt.sign({ id: user._id}, config.web.secret, {
         
      });

      res.status(200).send( {auth: true, token: token });
  })
};

// Logout an existing user
exports.userLogout = function(req, res) {
  res.status(200).send({ auth: false, token: null});
};
// update existing user
exports.update = function (req, res, next) {
  User.update(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}
//get all roles
exports.getRoles = function (req, res, next) {
  Role.find(function (err, roles) {
    if (err) return next(err);
    console.log(roles);
    res.json(roles);
  })
}
// add new role
exports.addRole = function(req, res, next){
  var newRole = new Role({
  roleId: req.body.roleId,
  roleName: req.body.roleName,
  });
  Role.add(newRole, (err, role) => {
    if (err)
        return res.status(500).send('There was a problem adding the role.');

    res.status(200).send('Role added');
});
}
//get all questions
exports.getQuestions = function (req, res, next) {
  Question.find(function (err, questions) {
    if (err) return next(err);
    console.log(questions);
    res.json(questions);
  })
}
// add new question
exports.addQuestion = function(req, res, next){
  var newQuestion = new Question({
  questionId: req.body.questionId,
  questionName: req.body.questionName,
  });
  Question.add(newQuestion, (err, question) => {
    if (err)
        return res.status(500).send('There was a problem adding the role.');

    res.status(200).send('Question added');
});
}
//get all repairs
exports.getRepair = function (req, res, next) {
  Repair.find(function (err, repairs) {
    if (err) return next(err);
    console.log(repairs);
    res.json(repairs);
  })
}
// add new repair
exports.addRepair = function(req, res, next){
  var newRepair = new Repair({
  repairId: req.body.repairId,
  repairName: req.body.repairName,
  price: req.body.price,
  });
  Repair.add(newRepair, (err, repair) => {
    if (err)
        return res.status(500).send('There was a problem adding the role.');

    res.status(200).send('Repair added');
});
}

