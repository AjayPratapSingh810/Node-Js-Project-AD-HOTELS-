const mongoose = require('mongoose');

const registerInfo = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

module.exports = mongoose.model("registerData", registerInfo);