const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../model-users');
const generateToken = require('../jwt/generateToken')
const router = express.Router();

router.post('/', async (req, res) => {
    const credentials = req.headers;
    if (credentials.username && credentials.password) {
        try {
            const user = await db.findByUser(credentials.username)
            if (user && bcrypt.hashSync(credentials.password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `User successfully logged in`, token});
            } else { 
                res.status(401).json({ message: `User not authorized`})
            }
        } catch (error) {
            res.status(500).json({
                error: `There was a problem logging in user`,
                error
            });
        }

    } else {
        res.status(400).json({ message: `Please provide valid login credentials`})
    }
});



module.exports = router;
