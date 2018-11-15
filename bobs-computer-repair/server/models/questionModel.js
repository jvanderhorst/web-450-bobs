const mongoose = require('mongoose');

  
const questionSchema = new mongoose.Schema({
    questionId: String,
    questionName: String,
    answer: String,
    dateUpdated: {type: Date, default: Date.now },
},
    {collection: 'security-questions'}
);

const Question = module.exports = mongoose.model('Question', questionSchema);

module.exports.getById = (id, callback) => {
    var query = {questionId: id};
    Question.findById(query, callback);
}

module.exports.add = (question, callback) => {
    question.save(callback);
}

module.exports.getOne = (q, callback) => {
    var query = {question: q};
    Question.findOne(query, callback);
}