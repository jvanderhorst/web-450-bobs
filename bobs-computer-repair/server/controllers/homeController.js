const User = require('../models/userModel');

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

exports.register = function (req, res, next) {
  User.create(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}

exports.update = function (req, res, next) {
  User.update(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}

