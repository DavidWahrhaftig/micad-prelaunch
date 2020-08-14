
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
            unique: true,
            required: true
        },
        launchDate: {
            type: Date,
            default: null
        },
        // publicEnable: {
        //     type: Boolean,
        //     default: false
        // },
        ssoEnable: {
            type: Boolean,
            default: false
        },
        urls: {
            type: Array,
            'default': [
                {title: 'ipr', url: 'https://bradfordhospitals.micadipr.net/'},
                {title: 'authsrv', url: 'https://authsrv-bradfordhospitals.micadipr.net/'},
                {title: 'mac', url: 'https://mac-bradfordhospitals.micadipr.net/'},
                {title: 'audit-trail', url: 'https://audit-trail-bradfordhospitals.micadipr.net/'},
                {title: 'accounts', url: 'https://accounts-bradfordhospitals.micadipr.net/'},]
        },
        releaseNotes: {
            type: String,
            default: 'http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf'
        },
        authUrl: {
            type: String,
            default: 'https://accounts-bradfordhospitals.micadipr.net/'
        },
        header: {
            type: String,
            default: 'Coming Soon! <APP NAME>'
        },
        welcomeText: {
            type: String,
            default: 'Admin welcome text'
        },
        // prereadyText: {
        //     type: String,
        //     default: 'Admin pre-ready text'
        // },
        instructionsText: {
            type: String,
            default: 'Admin instructions text'
        },
        verifications: {
            // listOfEmails: {type:Boolean, default:false},
            // customFields: {type:Boolean, default:false},
            // reports: {type:Boolean, default:false},
            // databaseMigrated: {type:Boolean, default:false},
            // productOwnerAccountManager: {type:Boolean, default:false}

            listOfEmails: {label: {type: String, default:'List Of Emails'}, verify: {type: Boolean, default: false}},
            customFields: {label: {type: String, default:'Custom Fields'}, verify: {type: Boolean, default: false}},
            reports: {label: {type: String, default:'Reports'}, verify: {type: Boolean, default: false}},
            databaseMigrated: {label: {type: String, default:'Database Migrated'}, verify: {type: Boolean, default: false}},
            productOwnerAccountManager: {label: {type: String, default:'Product Owner / Account Manager'}, verify: {type: Boolean, default: false}},
        }
    },
    // {
    //     collection: 'Admin'
    // },

);


const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;