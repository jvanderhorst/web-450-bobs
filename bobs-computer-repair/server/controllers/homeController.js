const User = require('../models/userModel');

exports.index = function(req, res, next) {
    res.json("Home Controller works!")
  };

exports.index = function getAll(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
}