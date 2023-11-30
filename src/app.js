const express = require('express');
const routes = require('./routes/main.js');
const hbs = require('hbs');
const mongoose = require('mongoose');
const Detail = require('./models/detail.js')
const Slider = require('./models/slider.js')
const branch = require('./models/branches.js');
const offerSlider = require('./models/offerSliders.js');
const aboutContent = require('./models/aboutUs.js');
const galleryImages = require('./models/gallery.js');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', routes);
// use static folder
app.use('/public', express.static("public"))   // ab hm static files sarri excess kr payenge

//(template engine)
app.set('view engine', 'hbs');
app.set('views', 'views');
// make partials global
hbs.registerPartials("views/partials");

// DB connection
mongoose.connect('mongodb://localhost:27017/ADHotels');
// Detail.create({
//     brandName: "AD HOTELS",
//     brandIconUrl: "../public/images/ADlogo.jpg",
//     links:
//         [
//             {
//                 label: "Our Branches",
//                 url: "#"
//             },
//             {
//                 label: "Offers",
//                 url: "#"
//             },
//             {
//                 label: "Gallery",
//                 url: "#"
//             },
//             {
//                 label: "About Us",
//                 url: "#"
//             },
//             {
//                 label: "Sign-In",
//                 url: "#"
//             },
//             {
//                 label: "For Bookings",
//                 url: "#"
//             },
//         ]
// })

// Slider.create([
//     {
//         url: "/public/images/slider1.jpg",
//         title: "Hotels with less Expense to High Adventure",
//         class: "active"

//     },
//     {
//         url: "/public/images/slider2.jpg",
//         title: "Cleaning is Our Passion",
//         class: "active"
//     },
//     {
//         url: "/public/images/slider3.jpg",
//         title: "Your visits in Our Area make Your Trip Memorable",
//         class: "active"
//     },
//     {
//         url: "/public/images/slider4.jpg",
//         title: "Your Family Is Like Our Family",
//         class: "active"
//     },

// ])
// branch.create([
//     {
//         imageUrl: "/public/images/chandigarhHotel.jpg",
//         city: "Chandigarh",
//         address: "Sector-20 Near Defence Colony"
//     },
//     {
//         imageUrl: "/public/images/agraHotel.jpeg",
//         city: "Agra",
//         address: " Near Airport Subash Nagar"
//     },
//     {
//         imageUrl: "/public/images/amritsarHotel.jpeg",
//         city: "Amritsar",
//         address: "Near Railway Station"
//     },
//     {
//         imageUrl: "/public/images/bangloreHotel.jpeg",
//         city: "Banglore",
//         address: "Near IT Park"
//     },
//     {
//         imageUrl: "/public/images/chandigarhHotel.jpeg",
//         city: "Delhi",
//         address: "Near Karol Bagh Metro Station"
//     },
//     {
//         imageUrl: "/public/images/mumbaiHotel.jpeg",
//         city: "Mumbai",
//         address: "Near Wankhede Cricket Stadium"
//     },

// ])
// offerSlider.create([
//     {
//         imageUrl: "/public/images/offerSlider1.jpg",
//         class: "active"
//     },
//     {
//         imageUrl: "/public/images/offerSlider2.jpg",
//         class: ""
//     },
//     {
//         imageUrl: "/public/images/offerSlider3.jpg",
//         class: ""
//     },
//     {
//         imageUrl: "/public/images/offerSlider4.jpg",
//         class: ""
//     },
//     {
//         imageUrl: "/public/images/offerSlider5.jpg",
//         class: ""
//     }
// ])
// aboutContent.create([
//     {
//         heading: "About AD Hotels",
//         content: "Welcome to AD Hotels, where luxury and hospitality converge to create a remarkable andunforgettable experience for our guests. We are dedicated to redefining your conceptofa perfect stay, combining modern comfort with timeless elegance."
//     },
//     {
//         heading: "Your Experience",
//         content: "We understand that every guest is unique, and we strive to create an individualized experience for each visitor. Whether you're seeking relaxation, adventure, or a blend of both, our staff is here to assist you in making the most of your stay.At AD Hotels, we invite you to be our guest and discover a world of unparalleled hospitality and comfort. We look forward to providing you with a memorable and enriching experience during your time with us."
//     },
//     {
//         heading: "Our Philosophy",
//         content: "At AD Hotels, we believe in the power of warm hospitality. Our philosophy revolves around the idea that the finest hotels are not just places to stay, but destinations where cherished memories are made. We take pride in our ability to make your stay with us a memorable experience, whether you're here for business or leisure."
//     }
// ])
// galleryImages.create([
//     {
//         imageurl: '/public/images/gallery1',
//     },
//     {
//         imageurl: '/public/images/gallery2',
//     },
//     {
//         imageurl: '/public/images/gallery3',
//     },
//     {
//         imageurl: '/public/images/gallery4',
//     },
//     {
//         imageurl: '/public/images/gallery5',
//     },
//     {
//         imageurl: '/public/images/gallery6',
//     },
// ])
app.listen(5556, () => {
    console.log('server connected');
})
