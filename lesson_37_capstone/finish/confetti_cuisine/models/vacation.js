"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

var vacationSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: "None specified",
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },

    maxTravelers: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages cannot have a negative number of travelers"],
        max: [25, "Vacation packages cannot have more than 25 travelers"],
        required: true
    },
    cost: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages cannot have a negative cost"],
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureLocation: {
        type: String,
        required: true,
    },

    departureDate: {
        type: String,
        required: true,
        default: Date.now
    },
    returnDate: {
        type: String,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Vacation", vacationSchema);