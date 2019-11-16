const getUser = require('@routes/getUser');
const getQuestions = require('@routes/getQuestions');
const addQuestions = require('@routes/addQuestion');
const addResponse = require('@routes/addResponse');
module.exports = [getUser, getQuestions, addQuestions, addResponse];
