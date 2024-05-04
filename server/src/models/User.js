const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String,
        required: true
    },
    fulName: {
        type: String,
        require: true,
        trim: true,
        min: 6,
        max: 30,
    },
    phone: {
        type: String,
        trim: true,
    },
    addresse: {
        type: String,
    },
    preference: {
        type: String,
    },
     orders: {
        type: String,
    },
     payment: {
        type: String,
    },
     reviews: {
        type: String,
    },
     wishlist: {
        type: String,
    }
});
const User = mongoose.model('user', userSchema);
module.exports = User;