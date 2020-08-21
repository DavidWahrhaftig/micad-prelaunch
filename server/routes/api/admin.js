const express = require('express');
const router = express.Router();

const User = require('../../model/User');
const Client = require('../../model/Client');

// GET all clients
router.get('/clients', (req, res) => {
    Client.find()
        .then(clients => {
            res.status(200).json({
                success: true,
                clients,
                msg: 'Get all clients'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

// Get admin settings of a client - api/admin/:clientID
router.get('/:clientID', (req, res) => {
    Client.findById(req.params.clientID)
        .then(client => {
            res.status(200).json({
                success: true,
                client,
                msg: 'Get Admin Config'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

router.post('/', (req, res) => {
    Client.create({clientName: req.body.clientName})
        .then(newClient => {
            res.status(201).json({
                success: true,
                client: newClient,
                msg: 'Get Admin Config'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});


// Update admin settings - api/admin/:clientID
router.put('/:clientID', (req, res) => {
    // let adminSettings = req.body.adminSettings;
    // adminSettings.launchDate = new Date(adminSettings.launchDate);
    console.log(req.body);
    Client.findByIdAndUpdate(req.params.clientID, req.body)
        .then(client => {
            res.status(201).json({
                success: true,
                msg: 'Updated Client Settings'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

// Show user ips of a client - api/admin/:clientID/users 
router.get('/:clientID/users', (req, res) => {
    User.find({clientID: req.params.clientID})
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

router.get('/nameValid/:clientName', (req,res) => {
    // Client.findOne({clientName: req.params.clientName}).then(client => {
    //     res.status(200).json({
    //         success: true,
    //         client,
    //         isExisting: false,
    //         msg: 'This client name already exists'
    //     });
    Client.find({}).then(clients => {
        const result = clients.filter(client => {
            const clientNameLower = client.clientName.toLowerCase();
            return req.params.clientName.toLowerCase() == clientNameLower;
        });

        const unique = (result.length == 0);
        res.status(200).json({
            success: true,
            unique,
            msg: 'Client exist check'
        });
    }).catch(err => {
        res.status(404).json({
            success: false,
            msg: err.message
        });
    });
});

router.delete('/:clientID', async (req, res) => {
    try {
        const removedClient = await Client.findByIdAndRemove(req.params.clientID);
        const removedUsers = await User.deleteMany({clientID: req.params.clientID});

        res.status(201).json({
            success: true,
            msg: 'Removed Client and their users successfully'
        });

    } catch(err) {
        res.status(404).json({
            success: false,
            msg: err.message
        });
    }
});

module.exports = router;