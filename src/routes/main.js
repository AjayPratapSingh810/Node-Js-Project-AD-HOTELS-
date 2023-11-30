const express = require('express');
const routes = express.Router();

const Detail = require('../models/detail.js');
const Slider = require('../models/slider.js');
const Branch = require('../models/branches.js');
const offerSlider = require('../models/offerSliders.js');
const about = require('../models/aboutUs.js');
const galleryImages = require('../models/gallery.js');
const registerData = require('../models/register.js');

// ---------- this is without template engine hbs---------------------
// routes.get('/', (req, res) => {
//     res.send('this is from routes');
// })

//--------------with template engine-----------------------
routes.get('/', async (req, res) => {
    const details = await Detail.findOne({ "_id": "654749e3dcfa0c1b00bdcc96" });
    const slides = await Slider.find();
    const branches = await Branch.find();
    const offerSliders = await offerSlider.find();
    const aboutContent = await about.find();

    // console.log(details);
    // console.log(sliders);
    // console.log(branches);
    // console.log(offerSliders);
    // console.log(aboutContent);
    res.render('index', {
        details: details,
        slides: slides,
        branches: branches,
        offerSlider: offerSliders,
        aboutContent: aboutContent,

    });
})

routes.post('/registerPage', async (request, response) => {
    // console.log(request.body);
    try {
        await registerData.create(request.body);
        response.redirect('/');
    } catch (e) {
        console.log(e);
        response.redirect('/');
    }
})


routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({ "_id": "654749e3dcfa0c1b00bdcc96" });
    const galleryImage = await galleryImages.find();
    // console.log(galleryImage);
    res.render('gallery', {
        details: details,
        galleryImage: galleryImage
    });
});
module.exports = routes;