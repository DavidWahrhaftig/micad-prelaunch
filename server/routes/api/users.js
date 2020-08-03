const express = require('express');
const router = express.Router();
const axios = require('axios');

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

// CREATE route
router.post('/', async (req, res) => {

    // const r = await axios.get('https://api.ipify.org/?format=json');
    // const serverIP = r.data.ip;
    // console.log("Server IP", serverIP);

    try {
        const foundUser = await User.findOne({ email: req.body.email });

        // check if user exists already
        if (foundUser) {
            return  res.status(409).json({
                    success: false,
                    msg: "User Already Exists"
                });
        }

        // create user and add ip to its ips list
        const newUser = await User.create({email: req.body.email});
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
    // User.create({email: req.body.email})
    //     .then(newUser => {
    //         newUser.ips.push(req.body.ip);
    //         newUser.save();
    //         res.status(200).json({
    //             success: true,
    //             msg: 'Created User'
    //         });
    //     }).catch(err => {
    //         res.status(404).json({
    //             success: false,
    //             msg: err.message
    //         });
    //     });
});

// SHOW route
router.get('/:email', (req, res) => {
    User.findOne({email: req.params.email})
        .then(user => {
            res.status(200).json({
                success: true,
                user,
                msg: 'Get User'
            });
        }).catch(err => {
            res.status(404).json({
                success: false,
                msg: err.message
            });
        });
});

//
// Update route
router.put('/', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {

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
});

//

module.exports = router;