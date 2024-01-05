const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // price: {
    //     type: String,
    //     required: true,
    // },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // countInStock: {
    //     type: Number,
    //     required: true,
    // },
    // imageUrl: {
    //     type: String,
    //     required: true,
    // },
    // size: {
    //     type: String,
    //     required: true,
    // },
    // color: {
    //     type: String,
    //     required: true,
    // },
    // numberInSTock: {
    //     type: String,
    //     required: true,
    // },
    // review: {
    //     type: String,
    //     required: true,
    // },

});

const Product = mongoose.model('product', productSchema);
module.exports = Product;