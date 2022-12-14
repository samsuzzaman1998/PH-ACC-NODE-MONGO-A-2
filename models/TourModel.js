const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Tour title must be required"],
        unique: [true, "title must be unique"],
    },
    location: {
        type: String,
        required: [true, "location must required"],
        unique: [true, "location will be unique"],
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    price: {
        type: Number,
        required: [true, "A Price of tour is required"],
    },
    photo: {
        type: String,
        unique: [true, "url need to be unique"],
    },
    likes: {
        type: Number,
        default: 0,
    },
});

const TourModel = mongoose.model("Tour", TourSchema);

module.exports = TourModel;
