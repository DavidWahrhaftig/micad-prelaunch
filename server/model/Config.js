const mongoose = require('mongoose');

// Create the User Schema
const ConfigSchema = new mongoose.Schema(
    {
        // _immutable: {
        //     type: Boolean,
        //     default: true,
        //     required: true,
        //     unique: true,
        //     immutable: true
        // },
        enable: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Coming Soon! <APP NAME>'
        },
        launchDate: {
            type: Date,
            default: null
        },
        urls: {
            type: Array,
            'default': [
                {title: 'ipr', url: 'https://bradfordhospitals.micadipr.net/'},
                {title: 'accounts', url: 'https://accounts-bradfordhospitals.micadipr.net/'},
                {title: 'authsrv', url: 'https://authsrv-bradfordhospitals.micadipr.net/'},
                {title: 'mac', url: 'https://mac-bradfordhospitals.micadipr.net/'},
                {title: 'audit-trail', url: 'https://audit-trail-bradfordhospitals.micadipr.net/'}]
        }
    },
    {
        collection: 'Config',
        // capped: {size: 1024, max: 1}
    },

);


const Config = mongoose.model('Config', ConfigSchema);
// Config.updateOne( {}, { siteOffline: false });

module.exports = Config;