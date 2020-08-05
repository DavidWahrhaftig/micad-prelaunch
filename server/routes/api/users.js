const express = require('express');
const router = express.Router();
const axios = require('axios');

const Client = require('../../model/Client');
const User = require('../../model/User');

// Index Route Get api/users/
// router.get('/', async (req, res) => {

//     User.find({})
//         .then(users => {
//             res.status(200).json({
//                 success: true,
//                 users,
//                 msg: 'Get All Users'
//             });
//         }).catch(err => {
//             res.status(404).json({
//                 success: false,
//                 msg: err.message
//             });
//         });
// });

// GET users route: /api/users/
router.get('/', (req, res) => {
    User.find({clientID: req.body.clientID})
        .then(users => {
            res.status(200).json({
                success: true,
                users,
                msg: 'Get Users of a client'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

// CREATE user route: /api/users/:clientID
router.post('/:clientID', async (req, res) => {

    // const r = await axios.get('https://api.ipify.org/?format=json');
    // const serverIP = r.data.ip;
    // console.log("Server IP", serverIP);

    try {
        // check client exists
        const foundClient = await Client.findById(req.params.clientID);
        if (!foundClient) {
            return  res.status(404).json({
                success: false,
                msg: "Client ID did not match an existing Client"
            });
        }

        const foundUser = await User.findOne({ email: req.body.email });

        // check if user exists already
        if (foundUser) {
            return  res.status(409).json({
                    success: false,
                    msg: "User Already Exists"
                });
        }

        // create user and add ip to its ips list
        // const newUser = await User.create({clientID: req.body.clientID, email: req.body.email, ip: req.body.ip});
        const newUser = await User.create({clientID: req.params.clientID, email: req.body.email});
        newUser.ips.push(req.body.ip);
        newUser.save();
        res.status(200).json({
            success: true,
            msg: 'Your IP has been recorded!'
        });

    } catch(err) {
        res.status(404).json({
            success: false,
            msg: err.message
        });
    }
});


// Update User route: /api/users/
router.put('/:clientID', async(req, res) => {
    // check client exists
    try {
        const foundClient = await Client.findById(req.params.clientID);
        if (!foundClient) {
            return  res.status(404).json({
                success: false,
                msg: "Client ID did not match an existing Client"
            });
        }

        User.findOne({ email: req.body.email })
            .then(user => {

                if (user.clientID != req.params.clientID) {
                    return  res.status(404).json({
                        success: false,
                        msg: `The client ${foundClient.clientName} doesn't have this user`
                    });
                }

                let msg = "Your new IP has been added!"
                // Overwrite previous IPs
                if (req.body.overwriteIP) {
                    user.ips = [];
                    msg = "Your IP has been updated! "
                } 
                user.ips.push(req.body.ip);
                user.save();

                res.status(200).json({
                    success: true,
                    msg
                });
            }).catch(err => {
                res.status(404).json({
                    success: false,
                    msg: err.message
                });
            });

    } catch (err) {
        res.status(404).json({
            success: false,
            msg: err.message
        });
    }
    
});

// GET users route: /api/users/:clientID/:userEmail
router.get('/:clientID/:userEmail', (req, res) => {
    User.findOne({clientID: req.params.clientID, email: req.params.userEmail})
        .then(user => {
            res.status(200).json({
                success: true,
                user,
                msg: 'Found User'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

//

module.exports = router;