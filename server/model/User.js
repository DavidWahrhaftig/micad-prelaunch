const mongoose = require('mongoose');

// Create the User Schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    ips: [
        {
            type: String
        }
    ]
});


const User = mongoose.model('User', UserSchema);

module.exports = User;