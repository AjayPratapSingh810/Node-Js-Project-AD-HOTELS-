const mongoose = require('mongoose');

const Slider = mongoose.Schema(
    {
        url: String,
        title: String,
        class: String
    }
);
module.exports = mongoose.model("sliders", Slider);