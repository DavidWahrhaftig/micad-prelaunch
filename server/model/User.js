const mongoose = require('mongoose');

// Create the User Schema
const UserSchema = new mongoose.Schema({
    clientID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ips: [
        {
            type: String
        }
    ],
    authUrlVerified: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;