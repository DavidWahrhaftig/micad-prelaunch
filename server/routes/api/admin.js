const express = require('express');
const router = express.Router();

const User = require('../../model/User');
const Config = require('../../model/Config');

// Get admin settings - api/admin/
router.get('/', (req, res) => {
    Config.findOne({})
        .then(config => {
            res.status(200).json({
                success: true,
                config,
                msg: 'Get Admin Config'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});
// Update admin settings - api/admin/
router.put('/', (req, res) => {
    // let adminSettings = req.body.adminSettings;
    // adminSettings.launchDate = new Date(adminSettings.launchDate);
    Config.findOneAndUpdate({}, req.body.adminSettings)
        .then(config => {
            res.status(200).json({
                success: true,
                config,
                msg: 'Updated Admin Settings'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

// Get user ips - api/admin/users 
router.get('/users', (req, res) => {
    User.find({})
        .then(users => {
            res.status(200).json({
                success: true,
                users,
                msg: 'Get All Users'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});


module.exports = router;