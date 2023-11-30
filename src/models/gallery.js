const mongoose = require('mongoose');

const galleryImages = mongoose.Schema({
    imageurl: String
})

module.exports = mongoose.model('galleryImages', galleryImages);