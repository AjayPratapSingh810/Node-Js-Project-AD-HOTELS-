const mongoose = require('mongoose');

const aboutUsContent = mongoose.Schema({
    heading: String,
    content: String
})

module.exports = mongoose.model('aboutContent', aboutUsContent);