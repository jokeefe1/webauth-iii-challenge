const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../model-users');
const protected = require('../middleware/protected');
const router = express.Router();

router.post('/', protected, (req, res) => {
    const credentials = req.headers;

    try {
        res.status(200).json({ message: `User successfully logged in` });
    } catch (error) {
        res.status(500).json({
            error: `There was a problem logging in user`,
            error
        });
    }
});

module.exports = router;
