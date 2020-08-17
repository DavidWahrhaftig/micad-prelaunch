const mongoose = require('mongoose');

const IpSchema = new mongoose.Schema({
    ip: {type: String, required: true},
    platform: {type: Object},
    authUrlVerified: {type: Boolean, default: false}
// }, {_id : false});
});

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
        // {
        //     ip: { type: String },
        //     platform: {type: Object},
        //     authUrlVerified: { type: Boolean, default: false }
        // }
        IpSchema
    ],
    // authUrlVerified: { 
    //     type: Boolean,
    //     default: false
    // }
});




const User = mongoose.model('User', UserSchema);

module.exports = User;