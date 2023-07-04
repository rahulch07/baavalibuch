const mongoose = require('mongoose');

const userTextSchema = new mongoose.Schema({
  text: {type: String, required: true},
});

const UserText = mongoose.model('UserText', userTextSchema);

module.exports = UserText;