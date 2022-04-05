const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    pickPoint: {
        type: String,
        require: true
    }
}, { timeStamps: true });

module.exports = mongoose.model("Services", serviceSchema);