const mongoose = require('mongoose');

const branch = mongoose.Schema({
    imageUrl: String,
    city: String,
    address: String
});

module.exports = mongoose.model("branch", branch);