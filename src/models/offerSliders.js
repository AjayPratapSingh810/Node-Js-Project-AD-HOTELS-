const mongoose = require('mongoose');

const offerSlider = mongoose.Schema({
    imageUrl: String,
    class: String
});

module.exports = mongoose.model("offerSliders", offerSlider);