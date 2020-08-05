
/**
 * 
 * Admin controls the client configurations
 * 
 */

 
const mongoose = require('mongoose');

// Create the Client Schema
const ClientSchema = new mongoose.Schema(
    {
        // _immutable: {
        //     type: Boolean,
        //     default: true,
        //     required: true,
        //     unique: true,
        //     immutable: true
        // },
        clientName: {
            type: String,
            required: true
        },
        launchDate: {
            type: Date,
            default: null
        },
        publicEnable: {
            type: Boolean,
            default: false
        },
        ssoEnable: {
            type: Boolean,
            default: false
        },
        urls: {
            type: Array,
            'default': [
                {title: 'ipr', url: 'https://bradfordhospitals.micadipr.net/'},
                {title: 'accounts', url: 'https://accounts-bradfordhospitals.micadipr.net/'},
                {title: 'authsrv', url: 'https://authsrv-bradfordhospitals.micadipr.net/'},
                {title: 'mac', url: 'https://mac-bradfordhospitals.micadipr.net/'},
                {title: 'audit-trail', url: 'https://audit-trail-bradfordhospitals.micadipr.net/'}]
        },
        releaseNotes: {
            type: String,
            default: 'http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf'
        },
        header: {
            type: String,
            default: 'Coming Soon! <APP NAME>'
        },
        welcomeText: {
            type: String,
            default: 'Admin welcome text'
        },
        instructionsText: {
            type: String,
            default: 'Admin instructions text'
        },
    },
    // {
    //     collection: 'Admin'
    // },

);


const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;