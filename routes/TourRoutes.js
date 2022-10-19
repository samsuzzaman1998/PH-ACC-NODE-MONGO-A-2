const express = require("express");
const tourRouter = express.Router(); // create a router

// Controllers
const {
    tourPostHandler,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
} = require("../controllers/TourControllers");

// Routes
tourRouter.post("/addTour", tourPostHandler);
tourRouter.get("/getAllTour", getAllTour);
tourRouter.get("/getSingleTour/:ID", getSingleTour);
tourRouter.patch("/updateTour/:ID", updateTour);
tourRouter.delete("/deleteTour/:ID", deleteTour);

module.exports = tourRouter; // exporting that router
