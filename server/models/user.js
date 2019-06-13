
const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
});

module.exports = mongoose.model("user", userSchema,'users');

